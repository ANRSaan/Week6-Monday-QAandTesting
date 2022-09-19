

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

const towerOf = num => {
    let tower = []              // set tower equal to an empty array
    let stars = 1              // set 'stars' equal to 1 -> the top of each tower will have 1 star
    let row = ''              // set row equal to an empty string
  
    for (let i = num - 1; i >= 0; i--) {              // reverse for loop (i will track number of spaces before an after the stars on each row)
      row = ' '.repeat(i) + '*'.repeat(stars) + ' '.repeat(i)      // use .repeat function to add the appropriate number of spaces and * per row
      tower.push(row)              // push the current string to the array
      row = ''                    // reset the row string to be empty
      stars += 2                  // add 2 to the star variable (since 1 space is taken off of each end of the row, two stars need to be added)
    }
    
    return tower
  }

