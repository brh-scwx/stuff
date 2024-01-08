const items = [
    "Catan",
    "Ticket to Ride",
    "Pandemic",
    "Codenames",
    "Splendor",
    "7 Wonders",
    "Carcassonne",
    "Dominion",
    "Azul",
    "Scythe",
    "Gloomhaven",
    "Wingspan",
    "Root",
    "Terraforming Mars",
    "Twilight Imperium",
    "Everdell",
    "Betrayal at House on the Hill",
    "Risk Legacy",
    "The Crew: The Quest for Planet Nine",
    "Kingdomino",
    "Sushi Go!",
    "Sheriff of Nottingham",
    "Spirit Island",
    "Castles of Burgundy",
    "Lords of Waterdeep",
    "Agricola",
    "Through the Ages",
    "Potion Explosion",
    "Blood Rage",
    "Mysterium"
];

// Function to display a random item
function showRandomItem() {
    const itemDisplay = document.getElementById("itemDisplay");
    const randomIndex = Math.floor(Math.random() * items.length);
    itemDisplay.textContent = items[randomIndex];
}

// Display a random item when the page loads
showRandomItem();