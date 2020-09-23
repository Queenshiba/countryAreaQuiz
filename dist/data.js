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
		let randomNum = Math.floor(Math.random() *250); 
		// console.log(randomNum)

			// choose and append a countryName 
			let quizCountryName = document.getElementById('quiz-countryName')
			const createPContryName = document.createElement('p')
			const countryNameTextnode = document.createTextNode(countryNames[randomNum]);
			createPContryName.appendChild(countryNameTextnode);
			quizCountryName.appendChild(createPContryName)


		// console.log(countryData);
		// console.log(countryNames);
		// console.log(countryPopulation);
		// console.log(countryArea);

	})
	// .catch(err => {

	// });

