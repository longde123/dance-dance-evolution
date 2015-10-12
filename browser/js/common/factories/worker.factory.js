app.factory('WorkerFactory', function (ScoreFactory, $timeout, ToneFactory, ArrowFactory, $state) {

    var TheWorker = function (route) {
        this.worker = new Worker(route)

    }

    TheWorker.prototype.prepStepChart = function (currentSong, config, bpm, stepChart) {

        this.worker.postMessage({
            type: 'preChart',
            chart: stepChart,
            bpm: bpm,
            arrowOffset: config.ARROW_TIME + currentSong.offset,
            songOffset: currentSong.offset,
            timing: config.TIMING_WINDOW,
            bpms: currentSong.bpms,
            stops: currentSong.stops
        });

    };

    var faders = {
        left: $(`.left-arrow-col .fader`),
        right: $(`.right-arrow-col .fader`),
        up: $(`.up-arrow-col .fader`),
        down: $(`.down-arrow-col .fader`)
    };

    var handleHit = function(arrows, $scope, e) {
        var domArrow = arrows[e.data.dir][e.data.index].el[0];
        //console.dir(domArrow);
        var arrow = domArrow.children[0];
        if (e.data.freeze) {
            var freeze = domArrow.children[1];
            freeze.style.top = '7.5vh';
            // adding freeze eater class to fader (covers up freezes)
            faders[e.data.dir][0].className += " freeze-eater";
        }
        arrow.hidden = true;
        //calculate the score, combo of the successful hit to display
        $scope.score = ScoreFactory.addScore(e.data.diff, 1);
        $scope.combo = ScoreFactory.addCombo(e.data.diff, 1);
        //as long as there is a combo to show, make it so
        $scope.combo > 1 ? $scope.showCombo = true : $scope.showCombo = false;
        //as long as there is a measure of accuracy to show, make it so
        $scope.accuracy = ScoreFactory.getAccuracy(e.data.diff);
        $scope.accuracyCol = ScoreFactory.getAccuracyColors($scope.accuracy);
        //only show accuracy feedback for 1 sec
        $timeout(function() {
            $scope.accuracy = null;
        }, 2000);
    }

    TheWorker.prototype.handleMessages = function ($scope, arrows) {
        this.worker.onmessage = function (e) {
            // arrows[e.data.dir][e.data.index].el.removeClass('activeArrow');

            // if($('.activeArrow').length === 0) {
            //     setTimeout(function() {
            //         tone.stop();
            //         arrowWorker.terminate();
            //         ArrowFactory.killTimeline();
            //         $state.go('results');
            //     }, 3000);
            // }
            if (e.data.hit) {
                handleHit(arrows, $scope, e);
            } else if (e.data.freezeUp) {
                // removing freeze eater class (this gets sent from worker on a '3' or when freeze is over)
                faders[e.data.dir][0].className = "fader";
                // removing arrow with freeze from dom so it doesn't show up again
                var domArrow = arrows[e.data.dir][e.data.index].el[0];
                domArrow.innerHTML = "";
            } else if (e.data.brokeFreeze) {
                // you broke the freeze you silly
                console.log('you broke the freeze you silly')
                faders[e.data.dir][0].className = "fader";
            } else {
                // arrows[e.data.dir][e.data.index].el.css("opacity", 0.1);
                //reset combo, don't show it and show 'Boo' on miss
                $scope.combo = ScoreFactory.resetCombo(e.data.accuracy, 1);
                $scope.showCombo = false;
                $scope.accuracy = "Boo";
                $scope.accuracyCol = '#ED3DED';
                //only show accuracy feedback for 1 sec
                $timeout(function() {
                    $scope.accuracy = null;
                }, 2000);
            };
            $scope.$digest();
        }
    }
    var keyCodeToDir = {
        '37': 'left',
        '40': 'down',
        '38': 'up',
        '39': 'right',
        '27': 'escape'
    };

    var placeArrows = {
        left: $(`.left-arrow-col .arrowPlace`),
        right: $(`.right-arrow-col .arrowPlace`),
        up: $(`.up-arrow-col .arrowPlace`),
        down: $(`.down-arrow-col .arrowPlace`)
    };

    var allPlaceArrows = $(`.arrowPlace`);

    TheWorker.prototype.handleKeyPress = function (e, tone, startTime) {
        if(e.keyCode === 48) {
            //should probably remove this if altogether
        };
        var dir = keyCodeToDir[e.keyCode];

        if (dir) e.preventDefault();
        else return;

        if (dir === 'escape') {
            ToneFactory.play('back');
            /** kill music (ToneFactory), animation timeline, and worker; go back to select screen */
            tone.stop();
            this.worker.terminate();
            ArrowFactory.killTimeline();
            $(document).off('keydown.keyPressHandler');

            $state.go('chooseSong');
        }

        if (placeArrows[dir]) placeArrows[dir].addClass('arrowPlacePressed');

        var timeStamp = (Date.now() - startTime) / 1000;
        // sends a note to worker to handle the keypress
        this.worker.postMessage({type: 'keyDown', timeStamp, dir});
    }

    TheWorker.prototype.addListener = function (tone, startTime) {

        $(document).on('keydown.keyPressHandler', (e) => {
            this.handleKeyPress(e, tone, startTime);
        });

        document.body.addEventListener('keyup', (e) => {
            var dir = keyCodeToDir[e.keyCode];
            if (!dir) return;
            // arrow pressed indicator
            allPlaceArrows.removeClass('arrowPlacePressed');
            this.worker.postMessage({type: 'keyUp', dir});

        })
    }



    return TheWorker;
});
