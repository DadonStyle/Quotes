// sort by color than id
// const data = [
//   { color: 'yellow', id: 2 },
//   { color: 'black', id: 3 },
//   { color: 'yellow', id: 5 },
//   { color: 'red', id: 1 },
//   { color: 'red', id: 4 },
// ];

// data.sort((a, b) => {
//   if (a.color > b.color) return 1;
//   if (a.color < b.color) return -1;
//   if (a.id > b.id) return 1;
//   if (a.id < b.id) return -1;
//   return 0;
// });

// console.log(data);

// arr1 = [1, 2, 3];
// arr2 = [4, 1, 9];

// const same = () => {
//   const frequencyCounter1 = {};
//   const myC = { 1: 'yellow' };
//   for (let i = 0; i < arr1.length; i++) {
//     frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
//   }
//   for (const item in frequencyCounter1) {
//     if (item in myC) console.log(myC[item]);
//   }
// };
// same();

// const sumZero = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;

//   for (let i = 0; i < arr.length; i++) {
//     let sum = arr[left] + arr[right];
//     console.log(arr[left]);
//     console.log(arr[right]);
//     console.log(sum);
//     console.log('---------');
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     }
//     if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return undefined;
// };

// console.log(sumZero([-3, -2, -1, 1]));

// sort by color than id
// const data = [
//   { color: 'yellow', id: 2 },
//   { color: 'black', id: 3 },
//   { color: 'yellow', id: 5 },
//   { color: 'red', id: 1 },
//   { color: 'red', id: 4 },
// ];

// const sort = () => {
//   const mapByColors = new Map();
//   for (let i = 0; i < data.length; i++) {
//     // console.log(mapByColors.get(data[i].color));
//     if (mapByColors.has(data[i].color)) {
//       mapByColors.set(data[i].color, [
//         ...mapByColors.get(data[i].color),
//         data[i],
//       ]);
//     } else {
//       mapByColors.set(data[i].color, [data[i]]);
//     }
//   }
//   const res = [];
//   for (let [, value] of mapByColors) {
//     const sorted = value.sort((a, b) => {
//       if (a.id < b.id) return -1;
//       if (a.id > b.id) return 1;
//     });
//     res.push(...sorted);
//   }
//   console.log(res);
// };

// sort();

// const reverse = (s) => {
//   if (s.length < 1) return s;
//   return s.at(-1) + reverse(s.slice(0, s.length - 1));
// };
// console.log(reverse('noam'));

// String.prototype.isPalindrom = function () {
//   let rev = this.split('').reverse().join('');
//   if (this.toString() === rev) return true;
//   return false;
// };

// console.log('abba'.isPalindrom());

// Array.prototype.myMap = (cb) => {
//   const resArr = [];
//   for (let i = 0; i < this.length; i++) {
//     resArr.push(cb(this[i]));
//   }
//   return resArr;
// };

const isObj = (random) => {
  if (typeof random === 'object' && random !== null && !Array.isArray(random))
    return true;
  return false;
};

console.log(isObj([]));
console.log(isObj('s'));
console.log(isObj({ key: 'noam', val: 'val' }));
