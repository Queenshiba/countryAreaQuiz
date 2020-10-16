

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
        console.log(randomizedFirstIndexForCap, randomizedSecondIndexForCap, randomizedThirdIndexForCap)


        // append the genarated countryName and capital city
        // countryName
        let countryNameContainer = document.getElementById('countryNameContainer')
        countryNameContainer.textContent = countryName[randomFirstIndexCountry]

        // append countryCapital in div
        let optionOne = document.getElementById('option1')
        let answerCap = countryCap[randomizedFirstIndexForCap]
        if (countryCap[randomizedFirstIndexForCap].textContent === '') {
            countryCap[randomizedFirstIndexForCap].textContent = "there is no capital city."
        } else {
            optionOne.textContent = answerCap
        }




        let optionTwo = document.getElementById('option2')
        let answerOption2 = countryCap[randomizedSecondIndexForCap]
        if (countryCap[randomizedSecondIndexForCap].textContent === '') {
            countryCap[randomizedSecondIndexForCap].textContent = "there is no capital city."
        } else {
            optionTwo.textContent = answerOption2
        }


        let optionThree = document.getElementById('option3')
        let answerOption3 = countryCap[randomizedThirdIndexForCap]
        if (countryCap[randomizedThirdIndexForCap].textContent === '') {
            countryCap[randomizedThirdIndexForCap].textContent = "there is no capital city."
        } else {
            optionThree.textContent = answerOption3
        }

        let option1 = document.getElementById('option1')
        let option2 = document.getElementById('option2')
        let option3 = document.getElementById('option3')
        
        console.log(option1.textContent)
        console.log(countryCap[randomFirstIndexCountry])

        option1.addEventListener('click', () => {
            if (option1 === countryCap[randomFirstIndexCountry]){
                alert('you are right')
            } else {
                alert('wrong')
            }
                
        }) 
        option2.addEventListener('click', () => {
            if (option2 === countryCap[randomFirstIndexCountry]){
                alert('you are right')
            } else {
                alert('wrong')
            }
        })
        
        option3.addEventListener('click', () => {
            if (option3 === countryCap[randomFirstIndexCountry]){
                alert('you are right')
            } else {
                alert('wrong')
            }
        
    })

})



let option1 = document.getElementById('option1')
let option2 = document.getElementById('option2')
let option3 = document.getElementById('option3')

option1.addEventListener('click', () => {
    option1.style.backgroundColor = 'yellow'
    option2.style.backgroundColor = ''
    option3.style.backgroundColor = ''
})
option2.addEventListener('click', () => {
    option2.style.backgroundColor = 'yellow'
    option1.style.backgroundColor = ''
    option3.style.backgroundColor = ''
})
option3.addEventListener('click', () => {
    option3.style.backgroundColor = 'yellow'
    option1.style.backgroundColor = ''
    option2.style.backgroundColor = ''
})