// This compare function should have the logic
export function comparefn_ascending (x, y) {
    if (x > y) {
        return 1;
    } else if (x < y) {
        return -1;
    } else return 0;
}

export function comparefn_descending (x, y) {
    if (x > y) {
        return -1;
    } else if (x < y) {
        return 1;
    } else return 0;
}