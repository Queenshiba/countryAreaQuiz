// (async () => {
// 	const data = await (await fetch("https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all", {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "ajayakv-rest-countries-v1.p.rapidapi.com",
// 			"x-rapidapi-key": "bf2f85f5cemsh8ed2e398af1b0bfp13630fjsn1c06ecddad8e"
// 		}})).json();
// 		console.log(data)
// })();


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
		console.log(data)
		// const body = document.querySelector('body');
		// const p = document.createElement('p');
		// p.textContent = data.map(item => item.name);
		// body.appendChild(p);

		let countryNames = []
		const countryPopulation = []
		const countryArea = []
		for (let i = 0; i < 250; i++) {
			countryNames.push(countryData[i].name)
			countryPopulation.push(countryData[i].population)
			countryArea.push(countryData[i].area)

			// create country options on the first page
			let selectionOfCountries = document.getElementById('selectionOfCountries')
			const createOptions = document.createElement('option')
			const countryOptionTextnode = document.createTextNode(countryNames[i]);
			createOptions.appendChild(countryOptionTextnode);
			selectionOfCountries.appendChild(createOptions)


		}
		// Generate random number between 0 to 250 
		let randomNum = Math.floor(Math.random() * 250);
		// console.log(randomNum)

		// choose and append a countryName 
		let quizCountryName = document.getElementById('quiz-countryName')
		const createPCountryName = document.createElement('p')
		const countryNameTextnode = document.createTextNode(countryNames[randomNum]);
		createPCountryName.appendChild(countryNameTextnode);
		quizCountryName = createPCountryName

		// console.log(countryData);
		// console.log(countryNames);
		// console.log(countryPopulation);
		// console.log(countryArea);

		// Generate options
		let numOffamiCtr;
		let userInfo;
		let selectionOfCountries = document.getElementById('selectionOfCountries')
		selectionOfCountries.addEventListener('change', function (e) {
			// console.log(this.value)
			userInfo = this.value
			console.log(userInfo)
			numOffamiCtr = countryNames.indexOf(userInfo)
			console.log(numOffamiCtr)
		})




		function areaCalculator(quizCtr, familerCtr) {
			// Generate options
			let familerCtrIndex;
			let userInfo;
			let selectionOfCountries = document.getElementById('selectionOfCountries')
			selectionOfCountries.addEventListener('change', function (e) {
				// console.log(this.value)
				userInfo = this.value
				// console.log(userInfo)
				familerCtrIndex = countryNames.indexOf(userInfo)

				console.log(countryArea[familerCtrIndex])

				if (quizCtr > familerCtr) {
					return countryNames[randomNum] + " is " + Math.round(quizCtr / familerCtr) + " times smaller" + " than " + familerCtr + " ."
				} else {
					return countryNames[randomNum] + " is " + Math.round(familerCtr / quizCtr) + " times smaller" + " than " + familerCtr + " ."
				}
			})




		}
	
	console.log(areaCalculator(countryArea[randomNum], countryArea[familerCtrIndex]))

		// append options in choices between 1-3
		const answer = document.getElementById('answer')
		// answer.textContent = areaCalculator(countryArea[randomNum], countryArea[numOffamiCtr])

	}

		// 	// .catch(err => {

		// });

	)



// userInfo = []
// 	let selectionOfCountries = document.getElementById('selectionOfCountries')
// 	selectionOfCountries.addEventListener('change', function(e)  {
// 		// console.log(this.value)
// 	userInfo.push(this.value.length)
// 	console.log(userInfo)
// })



// let selectionOfUnits = document.getElementById('selectionOfUnits')
// selectionOfUnits.addEventListener('change', function(e)  {
// 	// console.log(this.value)
// userInfo.push(this.value)
// console.log(userInfo)
// })

// let checkAnswerBtn = document.getElementById('checkAnswerBtn')
// checkAnswerBtn.addEventListener('click', () => {
// 	alert('hey')
// })