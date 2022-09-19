 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }


  test('Test should run and 2 should equal 2', () =>{
    expect(2).toBe(2)
  })

  describe("testData tests", () => {
    test("The first name of the test data should be Patten", () => {
      expect(testData.firstName).toBe("Paten")
    })
    test('Last name should be Goforth', () => {
      expect(testData.lastName).toBe('Goforth')
    })
  })


  describe('formatTitle Tests', () => {
    test('formatTitle should return a string', () => {
      let formattedTitle = formatTitle(testData.title)

      expect(typeof formattedTitle).toBe('string')
    })

    test('formatTitle function should format title correctly', () => {
      let formattedTitle = formatTitle(testData.title)
      expect(formattedTitle).toBe('Nulla Ac')

    })
  })

  describe("shortedBio tests", () => {
    test('should return shortened version of bio', () => {
      let shortBio = shortenBio(testData.bio)
      expect(shortbio.length).toBeLessThan(testData.bio.length)

    })
  })