const checkBit = (bit, dec) => {
  console.table({
    dec,
    bit,
    pow: 2 ** (bit - 1),
    div: dec / 2 ** (bit - 1),
    result: (dec / 2 ** (bit - 1)) % 2 !== 0,
  });
  return (dec / 2 ** (bit - 1)) % 2 !== 0;
};

export {checkBit};
