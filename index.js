document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('searchForm');
    const season= document.getElementById('season');
    const interest = document.getElementById('interest');
    const resultsContainer = document.getElementById('places');
    const title = document.getElementById('title');
    const searchContainer = document.getElementById('search-container');

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
    async function  displayDestination(event){
        event.preventDefault();
        const seasons = season.value;
        const interests =interest.value;




        
    }
        


}) 


    





