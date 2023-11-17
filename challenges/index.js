const blocks = [
    { gym: false, school: true, store: false },
    { gym: true, school: false, store: false },
    { gym: true, school: true, store: false },
    { gym: false, school: true, store: false },
    { gym: false, school: true, store: true },
];

const reqs = ["gym", "school", "store"];

const findClosestToAll = () => {
    const stats = [];
    let min = Infinity;
    let res;
    for (let i = 0; i < blocks.length; i++) {
        stats.push({ gym: Infinity, school: Infinity, store: Infinity });
        for (let req of reqs) {
            if (blocks[i][req]) stats[i][req] = 0;
            for (let j = 0; j < blocks.length; j++) {
                if (blocks[j][req])
                    stats[i][req] = Math.min(stats[i][req], Math.abs(i - j));
            }
        }
    }

    for (let i = 0; i < stats.length; i++) {
        const max = Math.max(...Object.values(stats[i]));
        if (max < min) {
            min = max;
            res = i;
        }
    }
    return res;
};

console.log(findClosestToAll());
