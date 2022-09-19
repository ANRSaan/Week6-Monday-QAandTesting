

const pyramid = num => {
    let spaces = num - 1
    let stars = 1
    let answer = []
    let string = ''
    while (num > 0){
        for (i = spaces; i >= 0; i--){
            string += ' '
        }
        for (i = 0; i < stars; i++){
            string += "*"
        }
        for (i = spaces; i >= 0; i--){
            string += ' '
        }
        answer.push(string)
        stars += 2
        spaces--
        string = ''
        num--
    }
    return answer
}

console.log(pyramid(3))

