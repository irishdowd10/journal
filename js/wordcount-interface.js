var Entry = require('./../js/journal.js').entryModule;


$(document).ready(function() {
  $('#posting').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);

    $("#newtitle").text("Title: " + title + " .");
    $("#newbody").text("Body: " + body + " .");
    $("#newword").text("Word Count: " + entry.wordCount(body));
    $("#newVowel").text("Vowel Count: " + entry.countVowels(body));
    $("#newConsonant").text("Consonant Count: " + entry.countConsonants(body));
    });
  });
