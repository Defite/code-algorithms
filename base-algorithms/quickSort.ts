function quickSort(arr: any[]) {
    if (arr.length < 2) {
        return arr;
    }

    const pivot= arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter(item => item < pivot);
    const greater = arr.filter(item => item > pivot);

    return [...quickSort(less), pivot, ...quickSort(greater)];
}
