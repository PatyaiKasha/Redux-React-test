//4
export function increment(step) {
  return {
    type: 'INCREMENT',
    payload: step,
  };
}
export function decrement(step) {
  return {
    type: 'DECREMENT',
    payload: step,
  };
}
export function reset(step) {
  return {
    type: 'RESET',
  };
}

// export reset{
//     type: 'RESET'
//    }
