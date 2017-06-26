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
