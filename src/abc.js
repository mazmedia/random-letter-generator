const lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let upper = []

lower.forEach(lowerLetter => {
    const newUpper = lowerLetter.toUpperCase()
    upper.push(newUpper)
})

export { lower, upper }