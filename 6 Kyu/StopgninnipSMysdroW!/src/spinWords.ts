function spinWords(words: string): string {
  const wordsArray = words.split(' ');

  for (let i = 0; i < wordsArray.length; i++) {
    const word = wordsArray[i];
    if (word.length > 4) {
      wordsArray[i] = word.split('').reverse().join('');
    }
  }

  return wordsArray.join(' ');
}

export default spinWords;
