// Function to handle search functionality
function searchTrails() {
    let searchInput = document.getElementById("searchInput").value.trim();
    if (searchInput === "") {
        alert("Please enter a location or trail name.");
    } else {
        console.log(`Searching for trails related to: ${searchInput}`);
        // Here you can add API calls or redirection
    }
}
