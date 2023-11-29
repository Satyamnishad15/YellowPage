function showResults(category) {
   
    const Restaurants = [
        "UNIYAL RESTAURANT",
        "THE SAVITRI"
     
    ];

    const Hotels = [
        "TAJ HOTEL",
        "SPROCKET",
        "WALK-IN-BIDHOLI"
    ]

    const GroceryStores = [
        "TATA STORE",
        "SKYLINE"
    ]

    const GasStations = [
        "INDIAN OIL",
        "RELIANCE"
    ]

    const Banks = [
        "KOTAK",
        "HDFC"
    ]

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `<h2>${category}</h2>`;

    if (category === 'Restaurants') {
        displayResults(Restaurants);
    } else if (category === 'Hotels') {
        displayResults(Hotels);
    } else if (category === 'Grocery Stores') {
        displayResults(GroceryStores);
    } else if (category === 'Gas Stations') {
        displayResults(GasStations);
    } else if (category === 'Banks') {
        displayResults(Banks);
    } else {
        resultsContainer.innerHTML += "<p>No results found.</p>";
    }
}

function displayResults(results) {
    const resultsContainer = document.getElementById('results');

    if (results.length > 0) {
        const resultList = document.createElement('ul');

        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.textContent = result;
            resultList.appendChild(listItem);
        });

        resultsContainer.appendChild(resultList);
    } else {
        resultsContainer.innerHTML += "<p>No results found.</p>";
    }
}
