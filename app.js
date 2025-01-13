console.log("Testing");

const blogPosts = [
  "My first blog post",
  "My second blow post",
  "My third blog post",
];
console.log(blogPosts[0]);
console.log(blogPosts[1]);
console.log(blogPosts[2]);

blogPosts[3] = "My fourth blog post";

console.log(blogPosts[3]);

const favortieFoods = ["Pizza", "Pasta", "Potatoes"];
console.log(favortieFoods);
const favortieColours = ["Pink", "Purple", "Maroon"];
console.log(favortieColours);
const favortieNumbers = ["36", "13", "49"];
console.log(favortieNumbers);

for (let i = 0; i < 5; i++) {
  console.log("Iteration", i);
}

let counter = 1;

while (counter <= 5) {
  console.log(counter);
  counter++;
}

let keeplooping = true;
let i = 0;
while (keeplooping == true) {
  console.log("Iteration", i);
  keeplooping = Math.random() < 0.1;
  i++;
}
