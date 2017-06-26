var entry = require('./../js/journal.js').entryModule;


$(document).ready(function() {
  $('#posting').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#entry').val();
    var entry = new Entry(title, body);

    $("#newtitle").text(entry.title);
    $("#newbody").text(entry.body);
    $("#newword").text(entry.wordCount(body));

      $('#wordcount').append("<li>This contains " + wordCount + " words.</li>");
    });
  });
