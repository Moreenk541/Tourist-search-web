document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const seasonSelect= document.getElementById('season');
    const interestSelect = document.getElementById('interest');
    const resultsContainer = document.getElementById('places');
    const title = document.getElementById('title');
    const searchContainer = document.getElementById('search-container');
    let destinations = [];
    // Fetch data from db.json using json-server
    async function fetchDestinations() {
        try {
            const response = await fetch('http://localhost:3000/destination');
            const data = await response.json();
            return data; 
           
        } catch (error) {
            console.error('Error fetching destinations:', error);
        }
       
    }

    // Filter and display destinations
    async function  search(event){
        event.preventDefault();
        const season = seasonSelect.value;
        const interest =interestSelect.value;

        const destinations = await fetchDestinations();
        if (!destinations) return;
         
        const filteredDestinations = destinations.filter(dest =>
            dest.season.toLowerCase() === season.toLowerCase() &&
              dest.interest.toLowerCase() === interest.toLowerCase()
        );
        displayResults(filteredDestinations)
       
    }
    
    //display results
    function displayResults(destinations) {
        resultsContainer.innerHTML = '';
        if (!destinations.length) {
            resultsContainer.innerHTML = '<h3 style="color:white;">No matching destinations found.</h3>';
            return;
        }
        destinations.forEach(dest =>{
            const destinationElement = document.createElement('div');
            destinationElement.classList.add('destination')
            destinationElement.innerHTML =`
                <h2>Name:${dest.name}</h2>               
                <h3>Country:${dest.country}</h3>
                <p style="font-weight: bold;">Season: ${dest.season}</p>
                <p style="font-weight: bold;">Interest: ${dest.interest}</p>
                <img src="${dest.image}" id="imageview" alt="${dest.name} image" style="width: 200px; height: auto; border-radius: 10px;">
                <button type="submit" class="view-btn">View</button>
                <button type="submit">To do List</button>


            `;
            resultsContainer.appendChild(destinationElement)
        });
         
        resultsContainer.addEventListener("click", function (event) {
            if (event.target.classList.contains("view-btn")) {
               const img =document.getElementById('imageview')
                img.style.display = img.style.display === "none" ? "block" : "none";
            
            }
        });


    }
  
    searchForm.addEventListener('submit', search);

    async function init() {
        destinations = await fetchDestinations();
        displayResults(destinations); // Show all destinations initially
    }

    init();
    


}) 


    





