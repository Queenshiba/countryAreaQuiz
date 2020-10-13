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
        data.forEach(element => {
            countryName.push(element.name)
            countryCap.push(element.capital)
            // console.log(element.capital)
        });
        console.log(countryName)
        console.log(countryCap)
    })
