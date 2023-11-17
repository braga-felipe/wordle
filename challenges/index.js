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

const numberToOrdinal = (num) => {
    console.log("==>");
    switch (num.toString()[num.toString().length - 1]) {
        case "1":
            return num + "st";
        case "2":
            return num + "nd";
        case "3":
            return num + "rd";
        default:
            return num + "th";
    }
};

const cardMasker = (num) => {
    const numStr = "" + num;
    if (numStr.length >= 6) {
        const mask = numStr.slice(1, -4).replace(/[0-9]/g, "*");
        return numStr[0] + mask + numStr.slice(-4);
    }
    return "none";
};

const calculator = (str) => {
    let res = 0;
    let num1 = "";
    let num2 = "";
    let isFirstNum = true;
    let operation = "";

    const operationMap = {
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    for (let char of str) {
        if (char.match(/[0-9]/)) {
            if (isFirstNum) {
                num1 += char;
            } else {
                num2 += char;
            }
        } else {
            if (num1 && num2) {
                res += operationMap[operation](+num1, +num2);
                num1 = res;
                num2 = "";
                isFirstNum = true;
            }
            operation = char;
            isFirstNum = false;
        }
    }
    return res;
};

const calculateString = (str) => {
    const numbers = str.split(/[^a-zA-Z0-9]/g);
    const queue = str.split(/[0-9]+/).filter((char) => char);
    let res = 0;

    const operations = {
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "+": (a, b) => +a + +b,
        "-": (a, b) => a - b,
    };

    for (let opt of Object.keys(operations)) {
        let index = queue.indexOf(opt);
        while (index >= 0) {
            res += operations[opt](numbers[index], numbers[index + 1]);
            numbers.splice(index + 1, 1);
            queue.splice(index, 1);
            numbers[index] = res;
            index = queue.indexOf(opt);
            if (numbers.length === 1) return res;
            res = 0;
        }
    }

    return res;
};
