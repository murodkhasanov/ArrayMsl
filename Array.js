//Tub son ekanligini aniqlovchi dastur tuzing,
//tub son bo'lsa YES, bo'lmasa NO chiqarilsin.

let input = 19;
let num = true;
for (let i = 2; i <= Math.sqrt(input); i++) {
  if (input % i == 0) {
    num = false;
  }
}

if (num && input > 1) {
  console.log("YES");
} else {
  console.log("NO");
}