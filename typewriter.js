const sentence = "hello there from lighthouse labs";
const interval = 100;
let timer = interval;

const typeSentence = sentence => {
  for (const char of sentence) {
    setTimeout(() => process.stdout.write(char), timer);
    timer += interval;
  }
  setTimeout(() => console.log(""), timer);
};

typeSentence(sentence);