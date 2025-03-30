document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const seasonSelect = document.getElementById('season');
    const interestSelect = document.getElementById('interest');
    const resultsContainer = document.getElementById('places');
    const viewList = document.getElementById('viewList'); 
    let plans = []; // Array to store selected destinations

    // Fetch data from db.json
    async function fetchDestinations() {
        try {
            const response = await fetch('http://localhost:3000/destination');
            const data = await response.json();
            return data; 
        } catch (error) {
            console.error('Error fetching destinations:', error);
        }
    }

    // Search function
    async function search(event) {
        event.preventDefault();
        const season = seasonSelect.value;
        const interest = interestSelect.value;

        const destinations = await fetchDestinations();
        if (!destinations) return;
         
        const filteredDestinations = destinations.filter(dest =>
            dest.season.toLowerCase() === season.toLowerCase() &&
            dest.interest.toLowerCase() === interest.toLowerCase()
        );
        displayResults(filteredDestinations);
    }

    // Display search results
    function displayResults(destinations) {
        resultsContainer.innerHTML = '';
        if (!destinations.length) {
            resultsContainer.innerHTML = '<h3 style="color:white;">No matching destinations found.</h3>';
            return;
        }
        destinations.forEach(dest => {
            let destinationElement = document.createElement('div');
            destinationElement.classList.add('destination');
            destinationElement.innerHTML = `
                <h2>${dest.name}</h2>
                <h3>${dest.country}</h3>
                <h4><strong>Season:</strong> ${dest.season}</h4>
                <h5><strong>Interest:</strong> ${dest.interest}</h5>
                <img src="${dest.image}" class="destination-img" alt="${dest.name} image" style="width: 200px; height: auto; border-radius: 10px; display: none;">
                <button class="view-btn">View</button>
                <button class="listButton">Add to To-Do List</button>
            `;
            
            resultsContainer.appendChild(destinationElement);
        });

        // Event listener for "View" button
        resultsContainer.addEventListener("click", function (event) {
            if (event.target.classList.contains("view-btn")) {
                const img = event.target.parentElement.querySelector(".destination-img");
                img.style.display = img.style.display === "none" ? "block" : "none";
            }
        });

        // Event listener for "To-Do List" button
        resultsContainer.addEventListener('click', function (event) {
            if (event.target.classList.contains('listButton')) {
                const destElement = event.target.parentElement;
                const destName = destElement.querySelector('h2').innerText;
                const destCountry = destElement.querySelector('h3').innerText;
                const destSeason = destElement.querySelector('h4').innerText.split(": ")[1];
                const destInterest = destElement.querySelector('h5').innerText.split(": ")[1];
                const destImage = destElement.querySelector('.destination-img').src;

                const destinationData = {
                    name: destName,
                    country: destCountry,
                    season: destSeason,
                    interest: destInterest,
                    image: destImage
                };

                plans.push(destinationData);
                displayPlans();
            }
        });
    }

    // Display the To-Do List
    function displayPlans() {


        viewList.innerHTML = ''; 

        if (plans.length === 0) {
            viewList.innerHTML = '<h3 style="color:white;">No destinations added to plans.</h3>';
            return;
        }

        plans.forEach((dest, index) => {
            const listItem = document.createElement('div');
            listItem.classList.add('destination');
            listItem.innerHTML = `
               
            
                <h2>${dest.name}</h2>
                <h3>${dest.country}</h3>
                <p><strong>Season:</strong> ${dest.season}</p>
                <p><strong>Interest:</strong> ${dest.interest}</p>
                <img src="${dest.image}" style="width: 150px; height: auto; border-radius: 10px;">
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;

            viewList.appendChild(listItem);
        });

        // Remove item from To-Do List
        viewList.addEventListener('click', function (event) {
            if (event.target.classList.contains('remove-btn')) {
                const index = event.target.dataset.index;
                plans.splice(index, 1);
                displayPlans(); 
            }
        });
    }
    async function init() {
        const destinations = await fetchDestinations();
        displayResults(destinations);
    }
    
    
    init();


    searchForm.addEventListener('submit', search);
});
