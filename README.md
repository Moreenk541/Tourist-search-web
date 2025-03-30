# Tourist Search Web App

## Overview

The **Tourist Search Web App** allows users to find travel destinations based on their selected **season** and **interest**. Users can search for destinations, view details, and add places to a **To-Do List**, which they can later review and manage.

## Features

- Search for destinations based on **season** (summer, winter, autumn, spring) and **interest** (adventure, nature, culture, food, relaxation).

- Display **filtered travel destinations** with details including name, country, season, interest, and an image.

- "**Add to To-Do List**" button to save selected destinations.

  "**Remove**" button to delete items from the To-Do List.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling (linked as `styles.css`).
- **JavaScript (index.js)**: Handles fetching data, search functionality, and user interactions.
- **JSON Server**: Simulates a database for destinations (`db.json`).

## File Structure

```
project-folder/
│── index.html        # Main HTML file
│── styles.css        # CSS file for styling
│── index.js          # JavaScript file for logic
│── db.json           # JSON database (used with JSON Server)
```

## Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/Moreenk541/Tourist-search-web.git
cd project-folder
```

### 2. Install JSON Server

Ensure you have **Node.js** installed, then run:

```
npm install -g json-server
```

### 3. Start the JSON Server

```
json-server --watch db.json 
```

This will start a local API at `http://localhost:3000/destination`.

### 4. Open `index.html` in a browser

Simply open the file in a browser (or use **Live Server** in VS Code).

## How It Works

### 1. Searching for Destinations

- Select a **season** and **interest**.
- Click the **Search** button.
- The app will fetch and display matching destinations from `db.json`.

### 2. Viewing Images

- Click the **View** button under a destination.
- The destination image will toggle between visible and hidden.

### 3. Adding to To-Do List

- Click the **Add to To-Do List** button to save a destination.
- The saved destination appears in the "View To-Do List" section.



### 4. Removing Destinations

- Click the **Remove** button next to a destination in the To-Do List.
- It will be removed from the list.



## Future Improvements

- Add user authentication to save personalized lists.
- Implement a backend with a database (e.g., Firebase or MongoDB).
- Enhance UI with animations and improved styling.

## Conclusion

This project provides a simple way for users to **find and plan** travel destinations. By using JavaScript and JSON Server, it demonstrates dynamic data fetching, filtering, and user interaction.

