import { lower, upper } from './abc'

const randLetter = (length = 10) => {
    const genLetters = []
    let upperNum = Math.round(Math.random())
    let randULLetter = Math.round(Math.random() * 26)
    let joined
    
    for (let i = 0; i < length; i++) {
        if (upperNum === 1) {
            genLetters.push(upper[randULLetter])
            randULLetter = Math.round(Math.random() * 26)
            upperNum = Math.round(Math.random())
        } else {
            genLetters.push(lower[randULLetter])
            randULLetter = Math.round(Math.random() * 26)
            upperNum = Math.round(Math.random())
        }

    }

    joined = genLetters.join(', ')
    document.querySelector('#letters').textContent = joined
}

export default randLetter