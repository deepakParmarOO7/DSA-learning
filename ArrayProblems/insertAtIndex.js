// You need to insert the given element at the given index.
// After inserting the elements at index, elements
// from index onward should be shifted one position ahead
// You may assume that the array already has sizeOfArray - 1
// elements.
/**
 * @param {number[]} arr
 * @param {number} sizeOfArray
 * @param {number} index
 * @param {number} element
 */
class Solution {
    insertAtIndex(arr, sizeOfArray, index, element) {
        // code here
      arr.splice(index,0,element)
    }
}
