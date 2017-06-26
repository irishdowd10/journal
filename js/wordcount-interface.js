var wordCount = require('./../js/journal.js').wordCountModule;


$(document).ready(function() {
  $('#posting').submit(function(event) {
    event.preventDefault();
    var wordArray = $('#entry').val();
    var count = simpleWordCount.numberWords();
      $('#wordcount').append("<li>This contains " + count + " words.</li>");
    });
  });
