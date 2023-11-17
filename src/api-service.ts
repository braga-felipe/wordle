import { API_RESPONSE } from "./api-response";

export const selectRandomWord = (words: string[]) => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
};

export const getWord = async () => {
    const response = new Promise<string[]>((res, rej) => {
        try {
            setTimeout(() => {
                res(API_RESPONSE);
            }, 1000);
        } catch (err) {
            rej(err);
        }
    });
    const words = await response;
    const randomWord = selectRandomWord(words);
    return randomWord;
};
