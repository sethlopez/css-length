let CSSLength = require('css-length');
// play around! change the length, base, or formatter, and see the output
let length = new CSSLength('24px', {
	base: 16,
	formatter: (value, unit) => value + unit
});

console.log(`raw length: ${length.raw}`);
console.log(`orig unit: ${length.unit}`);
console.log(`orig value: ${length.value}`);
console.log(`base pixel size: ${length.$config.base}`);
console.log(`length.cm: ${length.cm}`);
console.log(`length.em: ${length.em}`);
console.log(`length.in: ${length.in}`);
console.log(`length.mm: ${length.mm}`);
console.log(`length.pc: ${length.pc}`);
console.log(`length.pct: ${length.pct}`);
console.log(`length.pt: ${length.pt}`);
console.log(`length.px: ${length.px}`);
console.log(`length.rem: ${length.rem}`);
