import randomWords from 'random-words'


const NUM_OF_WORDS = 200


function generateWords() {
    return new Array(NUM_OF_WORDS).fill(null).map(() => randomWords())
}

export default generateWords;