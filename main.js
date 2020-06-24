var a=2, b=3;


function fn1(t1, t2) {
  function fn2(c1, c2) {
    return c1-c2;
  }
  return fn2(2*t1, 2*t2);
}

console.log(fn1(b, a));