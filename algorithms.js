
function mergeArr(array, left, mid, right) {

    const n1 = mid - left + 1;
    const n2 = right - mid;

    const left_array = new Array(n1);
    const right_array = new Array(n2);

    for (let i = 0; i < n1; i++) {
        left_array[i] = array[left+i];
    }

    for (let i = 0; i < n2; i++) {
        right_array[i] = array[mid+1+i]
    }
    
    let i = 0
    let j = 0
    let k = left
    
    while (i < n1 && j < n2) {
        if (left_array[i] < right_array[j]) {
            array[k] = left_array[i];
            i += 1;
        } else {
            array[k] = right_array[j];
            j += 1;
        }
        k += 1;
    }

    while (i < n1) {
        array[k] = left_array[i];
        i += 1;
        k += 1;
    }

    while (j < n2) {
        array[k] = right_array[j];
        j += 1;
        k += 1;
    }

}

function mergeSort(array, left, right) {
    if (left < right) {
        const mid = left + Math.floor((right - left) / 2)

        mergeSort(array, left, mid)
        mergeSort(array, mid+1, right)
        mergeArr(array, left, mid, right)
        return array
    }
    
}

function binarySearch(array, value) {
    let start = 0;
    let end = array.length - 1

    while (start <= end){
        const mid = Math.floor((end + start) / 2);

        if (array[mid] === value) {
            return true;
        } else if (array[mid] < value) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
}

// const a = [7, 3, 6, 5, 2, 4, 1]
// const as = mergeSort(a, 0, a.length-1)
// const find = binarySearch(a, 6)
// console.log(as);
// console.log(find)

module.exports = {
    mergeSort,
    binarySearch
}