import test from 'ava'

import { clamp } from '../src/index'

// clamp
test('clamp lower bound', (t) => {
  const bounds = { min: 0, max: 1 };
  t.is(clamp(-1, bounds.min, bounds.max), bounds.min);
})

test('clamp in bounds', (t) => {
  const bounds = { min: 0, max: 1 };
  const testVal = .5;
  t.is(clamp(testVal, bounds.min, bounds.max), testVal);
})

test('clamp higher bound', (t) => {
  const bounds = { min: 0, max: 1 };
  t.is(clamp(2, bounds.min, bounds.max), bounds.max);
})
