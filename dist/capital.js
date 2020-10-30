

fetch("https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com",
        "x-rapidapi-key": "bf2f85f5cemsh8ed2e398af1b0bfp13630fjsn1c06ecddad8e"
    }
})
    .then(response => {
        // console.log(response);
        return response.json()
    })
    .then(function (data) {
        let countryData = data
        let countryName = []
        let countryCap = []
        let noneCap = []
        data.forEach(element => {
            countryName.push(element.name)
            countryCap.push(element.capital)



        });
        // console.log(noneCap)
        // console.log(countryName)
        // console.log(countryCap)

        // Generate random number between 0 to 250 
        let randomThreeNumbers = [];
        function randomThreeNum(min, max) {
            for (let i = 0; i < 3; i++) {
                randomThreeNumbers.push(Math.floor(Math.random() * max) + min);
            }
            return randomThreeNumbers;
        }
        console.log(randomThreeNum(1, 250))

        let randomFirstIndexCountry = randomThreeNumbers[0]
        let randomSecondIndexCountry = randomThreeNumbers[1]
        let randomThirdIndexCountry = randomThreeNumbers[2]
        console.log(countryName[randomFirstIndexCountry])
        console.log(countryCap[randomFirstIndexCountry], countryCap[randomSecondIndexCountry], countryCap[randomThirdIndexCountry])

        function shuffleOneToThree(array) {
            let currentIndex = array.length, temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }

        // Used like so
        let arrOneToThree = [0, 1, 2];
        shuffleOneToThree(arrOneToThree);
        console.log(arrOneToThree);

        let arrFirstNum = arrOneToThree[0]
        let arrSecondNum = arrOneToThree[1]
        let arrThirdNum = arrOneToThree[2]


        let randomizedFirstIndexForCap = randomThreeNumbers[arrFirstNum]
        let randomizedSecondIndexForCap = randomThreeNumbers[arrSecondNum]
        let randomizedThirdIndexForCap = randomThreeNumbers[arrThirdNum]


        console.log(arrFirstNum, arrSecondNum, arrThirdNum)
        console.log(countryCap[randomizedFirstIndexForCap], randomizedSecondIndexForCap, randomizedThirdIndexForCap)


        // append the genarated countryName and capital city
        // countryName
        let countryNameContainer = document.getElementById('countryNameContainer')
        countryNameContainer.textContent = countryName[randomFirstIndexCountry]

        // append countryCapital in div
        let optionOne = document.getElementById('option1')
        let answerCap = countryCap[randomizedFirstIndexForCap]

        optionOne.textContent = answerCap

        let optionTwo = document.getElementById('option2')
        let answerOption2 = countryCap[randomizedSecondIndexForCap]
        optionTwo.textContent = answerOption2

        let optionThree = document.getElementById('option3')
        let answerOption3 = countryCap[randomizedThirdIndexForCap]
        optionThree.textContent = answerOption3




        let option1 = document.getElementById('option1')
        let option2 = document.getElementById('option2')
        let option3 = document.getElementById('option3')


        if (option1.textContent === '') {
            option1.textContent = countryName[randomFirstIndexCountry] + " doesn't have a capital city."
        }
        if (option2.textContent === '') {
            option2.textContent = countryName[randomFirstIndexCountry] + " doesn't have a capital city."
        }
        if (option3.textContent === '') {
            option3.textContent = countryName[randomFirstIndexCountry] + " doesn't have a capital city."
        }

        let popupContainer = document.getElementById('popup-container')
        let happyFace = document.getElementById('happyFace')
        let sadFace = document.getElementById('sadFace')
        let result = document.getElementById('result')
        let comment = document.getElementById('comment')

        if( popupContainer.style.display = 'block' ) {
            popupContainer.style.display = 'none'
        } else {
            popupContainer.style.display = 'block'
        }
        

        option1.addEventListener('click', () => {

            popupContainer.style.display = "block"
            if (option1.textContent === countryCap[randomFirstIndexCountry]) {
                happyFace.style.display = "block"
                sadFace.style.display = ""
                comment.textContent = ""
                result.textContent = 'You are right'
            } else {
                sadFace.style.display = "block"
                happyFace.style.display = ""
                result.textContent = 'Wrong'
                if (comment.textContent === countryName[randomFirstIndexCountry] + " doesn't have a capital city.") {
                    return option1.textConten
                } else {
                    comment.textContent = option1.textContent + ' is ' + countryName[randomizedFirstIndexForCap] + "'s capital city."
                }

            }

        })

        option2.addEventListener('click', () => {
            popupContainer.style.display = "block"
            if (option2.textContent === countryCap[randomFirstIndexCountry]) {
                happyFace.style.display = "block"
                sadFace.style.display = ""
                comment.textContent = ""
                result.textContent = 'You are right'
            } else {
                sadFace.style.display = "block"
                happyFace.style.display = ""
                result.textContent = 'Wrong'

                if (comment.textContent === countryName[randomFirstIndexCountry] + " doesn't have a capital city.") {
                    return option2.textConten
                } else {
                    comment.textContent = option2.textContent + ' is ' + countryName[randomizedSecondIndexForCap] + "'s capital city."
                }

            }
        })

        option3.addEventListener('click', () => {
            popupContainer.style.display = "block"
            if (option3.textContent === countryCap[randomFirstIndexCountry]) {
                happyFace.style.display = "block"
                sadFace.style.display = ""
                comment.textContent = ""
                result.textContent = 'You are right'
            } else {
                sadFace.style.display = "block"
                happyFace.style.display = ""
                result.textContent = 'Wrong'

                if (comment.textContent === countryName[randomThirdIndexCountry] + " doesn't have a capital city.") {
                    return option3.textConten
                } else {
                    comment.textContent = option3.textContent + ' is ' + countryName[randomizedThirdIndexForCap] + "'s capital city."
                }
            }

        })



    })

function goNext() {
    location.reload();
}

function closePopUp() {
    let popupContainer = document.getElementById('popup-container')
    if (popupContainer.style.display = "block") {
        popupContainer.style.display = ""
    }
}

// let options = document.getElementsByClassName('option')
// console.log(options)

// options.addEventListener('click', () => {
//     // if (alert('wrong')){
//     //     return goNext()
//     // }

// })

let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')

option1.addEventListener('click', () => {
    option1.style.backgroundColor = 'lightgray'
    // option2.style.backgroundColor = ''
    // option3.style.backgroundColor = ''
})
option2.addEventListener('click', () => {
    option2.style.backgroundColor = 'lightgray'
    // option1.style.backgroundColor = ''
    // option3.style.backgroundColor = ''
})
option3.addEventListener('click', () => {
    option3.style.backgroundColor = 'lightgray'
    // option1.style.backgroundColor = ''
    // option2.style.backgroundColor = ''
})