`use strict`

export const fischerYatesShuffle = (arr) => {
  // shuffle the categories arr in place in O(n) time
  let i = 0,
    j = 0,
    temp = null

  for (i = arr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  return arr
}
