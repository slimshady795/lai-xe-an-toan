export const PREFIX_ANSWER = ['A', 'B', 'C', 'D', 'E', 'F']


export const THEORY_QUESTIONS = [...Array(600)].map((_, idx) => ({
    title: `trường hợp ${idx + 1}`,
    answers: [
        'đáp án 1',
        'đáp án 2 (đúng)',
        'đáp án 3',
        'đáp án 4',
    ],
    correct: 1,
    explanation: 'abc',
}))
