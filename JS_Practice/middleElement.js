// Find the middle element

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

function gimme(triplet) {
  let minNum,
    maxNum = 0;

  for (let i = 0; i < triplet.length; i++) {
    let current = triplet[i];

    if (current > triplet[i + 1]) {
    }
  }

  console.log(minNum, maxNum);
}

gimme([5, 14, 10]);
