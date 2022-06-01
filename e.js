/* Sum Game III */

const n = 5;
const r = [1, 1, 2, 3, 4];
const x = r.filter((y, i) => r.indexOf(y) === i); // remove duplicate
let y = 0;
x.forEach(z => {
    y += (z * 10)
})

console.log(y);
