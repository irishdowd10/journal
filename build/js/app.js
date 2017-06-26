(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function wordCount(word, sentence) {
  var count = 0;
  var sentence = sentence.ToLower();
  var word = word.ToLower();
  var wordArray = sentence.Split(' ');

    for (var i = 0; i < wordArray.Length; i++)
    {
      if(wordArray[i] === word)
      count++;
    }

  return count;
};
exports.wordCountModule = wordCount;

},{}],2:[function(require,module,exports){
var wordCount = require('./../js/journal.js').wordCountModule;


$(document).ready(function() {
  $('#posting').submit(function(event) {
    event.preventDefault();
    var wordArray = $('#entry').val();
    var count = simpleWordCount.numberWords();
      $('#wordcount').append("<li>This contains " + count + " words.</li>");
    });
  });

},{"./../js/journal.js":1}]},{},[2]);
