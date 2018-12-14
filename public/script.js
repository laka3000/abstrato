$(document).ready(function () {
  $('#term').click(function() { searchForTerm() });

  $('#button').click(function() { getNewTerm() });
});

function searchForTerm() {
  window.open('http://google.com/search?q=' + $('#term')[0].innerText);
}

function getNewTerm() {
  $.getJSON('/new_term', function(data) {
    appendNewTerm(data);
  })

  .fail(function() {
    appendNewTerm('Estagiário de analista de sistemas para internet');
  });
}

function appendNewTerm(newTerm) {
  $('#term')[0].innerText = newTerm;
}
