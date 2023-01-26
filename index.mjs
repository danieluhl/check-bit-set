import {checkBit} from './check-bit.mjs';

console.assert(checkBit(2, 5), false);
console.assert(checkBit(3, 5), true);
console.assert(checkBit(2, 10), true);
console.assert(checkBit(3, 10), false);
