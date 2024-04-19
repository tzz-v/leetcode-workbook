function* fibGenerator(): Generator<number, any, number> {
  let a = 0;
  let b = 1;
  yield a;
  yield b;
  while (true) {
    [a, b] = [b, a + b];
    yield b;
  }
}

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
