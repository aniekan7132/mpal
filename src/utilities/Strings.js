const capitalise = (word) => {
    return `${word[0].toUpperCase()}${word.substring(1, word.length)}`
}

const shorten = (word, limit) => {
    if (word.length > limit)
        return word.toString().substring(0, limit) + "..."
    return word
}


const string = { capitalise, shorten }

export default string