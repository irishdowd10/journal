function Entry(title, body) {
  this.title = title;
  this.body = body;
}
Entry.prototype.wordCount = function(body) {
  return body.split(" ").length;
};

exports.entryModule = Entry;
