// اكتب دالة تأخذ مصفوفة من ألارقام وتعيد مجموع هذه األرقام
const sumArray = (numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sumArray([10, 60, 30, 90, 110])); // result => 300

// اكتب دالة تأخذ مصفوفة من األرقام وتعيد العدد األكبر في المصفوفة
const findMax = (numbers) => Math.max(...[10, 60, 30, 90, 110]);
console.log(findMax([10, 60, 30, 90, 110])); // result => 110

// اكتب دالة تأخذ سلسلة نصية وتعيد نفس السلسلة لكن معكوسة.
const reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Web Masters")); // result => "sretsaM beW"

// اكتب دالة تأخذ مصفوفة من األرقام وتعيد مصفوفة جديدة بدون األرقام المكررة.
const removeDuplicates = (numbers) => [...new Set(numbers)];
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// result => [ 1, 2, 3, 4, 5 ]
