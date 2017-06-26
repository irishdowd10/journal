(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, body) {
  this.title = title;
  this.body = body;
}
Entry.prototype.wordCount = function(body) {
  return body.split(" ").length;
};

Entry.prototype.countVowels = function(body) {
  return body.match(/[aeiou]/gi).length;
  //should we use gi regex?
};



exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
$(document).ready(function(){
  $('#time').text(moment());
});

var Entry = require('./../js/journal.js').entryModule;


$(document).ready(function() {
  $('#posting').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(title, body);

    $("#newtitle").text(entry.title);
    $("#newbody").text(entry.body);
    $("#newword").text(entry.wordCount(body));
    $("#newVowel").text(entry.countVowels(body));
    });
  });

},{"./../js/journal.js":1}]},{},[2]);
