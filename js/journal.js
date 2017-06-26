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

Entry.prototype.countConsonants = function(body) {
  return body.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
  //should we use gi regex?
};



exports.entryModule = Entry;
