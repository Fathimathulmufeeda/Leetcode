/**
 * @param {string} s
 * @return {string}
 */

var reverseVowels = function(s) {
    let arr = s.split("");
    let vow = "aeiouAEIOU";

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (!vow.includes(arr[left])) {
            left++;
        }
        else if (!vow.includes(arr[right])) {
            right--;
        }
        else {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    }

    return arr.join("");
};
