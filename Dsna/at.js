function at(arr, index) {
  return index < 0 ? arr[arr.length + index] : arr[index];
}

console.log(at(['a', 'b', 'c', 'd', 'e'], 1));
console.log(at(['a', 'b', 'c', 'd', 'e'], -1));
