/*global PIXI*/

app.config(function ($stateProvider) {
    $stateProvider.state('pixi', {
        url: '/pixi',
        templateUrl: '/js/pixi/pixi.html',
        controller: function (PixiFactory, ToneFactory, ArrowFactory) {
            var container = new PIXI.Container();
            var renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
            console.log(renderer);
            renderer.backgroundColor = 0xDDDDDD;

            document.body.appendChild(renderer.view);

            var topArrows = PixiFactory.makeTopArrows(container);

            var testChart = [
                [
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0']
                ],
                [
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '1']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '1'],
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '1']
                ],
                [
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '1']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0']
                ],
                [
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '0', '0', '1'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '0']
                ],
                [
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '0']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '1'],
                    ['2', '0', '0', '0']
                ],
                [
                    ['0', '1', '0', '0'],
                    ['3', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '2']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '0', '1', '3'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0']
                ],
                [
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '0', '0', '1'],
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0']
                ],
                [
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1']
                ],
                [
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['1', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '2', '0', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '3', '0', '0']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['2', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['3', '0', '0', '0']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '2'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '3']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '1', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '1', '0', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '1'],
                    ['0', '0', '1', '0'],
                    ['0', '1', '0', '1']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['1', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['1', '1', '0', '0']
                ],
                [
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0']
                ],
                [
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '1', '0']
                ],
                [
                    ['0', '1', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '1'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0']
                ],
                [
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '1']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '2', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '3', '0', '0'],
                    ['0', '0', '0', '0']
                ],
                [
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '0', '1']
                ],
                [
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '0', '1', '0'],
                    ['0', '0', '0', '1']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '1'],
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '1']
                ],
                [
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '1'],
                    ['0', '0', '1', '0'],
                    ['1', '0', '0', '1']
                ],
                [
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '1', '0', '0'],
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0']
                ],
                [
                    ['0', '0', '0', '1'],
                    ['0', '1', '0', '0'],
                    ['1', '0', '0', '0'],
                    ['0', '0', '2', '0']
                ],
                [
                    ['0', '0', '0', '0'],
                    ['0', '0', '0', '0'],
                    ['0', '0', '3', '0'],
                    ['0', '0', '0', '0'],
                    [';']
                ]
            ];

            // var tone = new ToneFactory("/audio/321 STARS.mp3", 191.94, 2.7-0.67239, ".67239");

            // testChart.forEach(function(measure, chIndex) {
            //     var notes = measure.length;
            //     measure.forEach(function(note, mIndex) {
            //       note.forEach(function(maybeArrow, index) {
            //           if (maybeArrow !== '0') {
            //             //maybe we can make the arrows and let them go via timeline events?
            //               var dir = ArrowFactory.indexToDir(index);

            //               arrow.animate(191.94, chIndex, mIndex, notes);
            //               tone.transport.setTimeline(function(time) {
            //                 $body.on(`keydown.${chIndex}${mIndex}${index}`, function(e) {
            //                   if(e.keyCode == ArrowFactory.ARROW_KEYS[dir]) {
            //                     listener(arrow)
            //                   }
            //                 });
            //               }, `${chIndex}m + ${notes}n * ${mIndex} + 0 * 16n`);
            //               tone.transport.setTimeline(function(time) {
            //                 $body.off(`keydown.${chIndex}${mIndex}${index}`)
            //               }, `${chIndex}m + ${notes}n * ${mIndex} + 2 * 16n-`);
            //           }
            //       })
            //     })
            // });

            //
            var tone = new ToneFactory("/audio/321 STARS.mp3", 191.94, 2.125-0.578, ".578");

            testChart.forEach(function(measure, chIndex) {
                var notes = measure.length;
                measure.forEach(function(note, mIndex) {
                  note.forEach(function(maybeArrow, index) {
                      if (maybeArrow !== '0') {
                        //maybe we can make the arrows and let them go via timeline events?
                          var dir = ArrowFactory.indexToDir(index);
                          var arrow = PixiFactory.makeArrow(container, dir, `${chIndex}m + ${notes}n * ${mIndex} - 2.125`, tone.transport);
    
                      }
                  });
                });
            });


    
            // var arrow2 = PixiFactory.makeArrow(container, 'right', 1, tone.transport);
            // var arrow3 = PixiFactory.makeArrow(container, 'down', 1, tone.transport);

            Tone.Buffer.onload = function () {
                console.log('Start it!');
                tone.start();
            }
            //tone.transport.start();
            //

            window.container = container;
            // container.alpha = 0;

            var ticker = new PIXI.ticker.Ticker();
            ticker.start();
            var timeElapsed = 0;
            function animate() {
                requestAnimationFrame(animate);
                // how to add events at a certain time (keep track with elapsedMS and add to a value)
                timeElapsed += ticker.elapsedMS;
                // console.log(timeElapsed);

                PixiFactory.moveArrows(8);


                renderer.render(container);
            }

            requestAnimationFrame(animate);

        }
    });
});
