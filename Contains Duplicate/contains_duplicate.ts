function hasDuplicate(nums: number[]) {
    let sorted: number[] = [];
    sorted = nums.sort()
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] == sorted[i + 1]) {
            return true
        }
    }

    return false;
}

let nums: number[] = [3,1,1,3,4];

console.log(hasDuplicate(nums));