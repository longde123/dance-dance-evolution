app.config(function ($stateProvider) {

    $stateProvider.state('mainMenu', {
        url: '/mainMenu',
        templateUrl: 'js/mainMenu/mainMenu.html',
        controller: 'MainMenuCtrl'
    });

});

app.controller('MainMenuCtrl', function ($scope, $state) {

  function play() {
    var audio = document.getElementById("blop");
    audio.play();
  };

  window.addEventListener('keydown', onArrowKey, false);
  function onArrowKey(event) {
      play();
      var active = $('.activeChoice');
      var activeNumber = parseInt(active[0].id.slice(-1));
    if(event.which === 40) {
      activeNumber = activeNumber === 5? 1 : activeNumber + 1;
      active.removeClass("activeChoice");
      $('#option' + activeNumber).addClass("activeChoice");
    } else if(event.which === 38) {
      activeNumber = activeNumber === 1? 5 : activeNumber - 1;
      active.removeClass("activeChoice");
      $('#option' + activeNumber).addClass("activeChoice");
    } else if(event.which === 13) {
      var uiState = active[0].outerHTML.split('"');
      $state.go(uiState[5]);
    };
  };
});