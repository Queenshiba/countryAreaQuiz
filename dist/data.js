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
		quizCountryName.appendChild(createPCountryName)

		// console.log(countryData);
		// console.log(countryNames);
		// console.log(countryPopulation);
		// console.log(countryArea);

		// Generate options
		const jpn = {
			name: 'japan',
			area: 377930,
		}

		function areaCalculator(quizCtr, familerCtr) {

			if (quizCtr > familerCtr) {
				return countryNames[randomNum] + " is " + Math.round(quizCtr / familerCtr) + " times smaller" + " than " + familerCtr + " ."
			} else {
				return countryNames[randomNum] + " is " + Math.round(familerCtr / quizCtr) + " times smaller" + " than " + familerCtr + " ."
			}

		}

		console.log(areaCalculator(countryArea[randomNum], jpn.area))
	}




// let checkAnswerBtn = document.getElementById('checkAnswerBtn')
// checkAnswerBtn.addEventListener('click', () => {
// 	alert('hey')
// })
// 	let startBtn = document.getElementById('startBtn')
// startBtn.addEventListener('click', () => {

// })


// 	// .catch(err => {

// 	// });
	)
