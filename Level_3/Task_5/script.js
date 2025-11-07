const container = document.getElementById("container");
// Random User API URL
const API = "https://randomuser.me/api/?results=8";

async function fetchUsers() {
  try {
    // Fetching data from the API
    const response = await fetch(API);
    // Converting response to JSON
    const data = await response.json();
    // Displaying users
    displayUsers(data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}
// Function to display users on the webpage
const displayUsers = (users) => {
  users.results.forEach((user) => {
    // Creating a div for each user
    const userDiv = document.createElement("div");
    userDiv.classList.add("user-card");
    // Adding user details to the card
    userDiv.innerHTML = `
      <img src="${user.picture.large}" alt="User Picture" />
      <div class="data">
        <h1>${user.name.first} ${user.name.last}</h1>
        <p>Phone: ${user.phone}</p>
        <p>Age: ${user.dob.age}</p>
        <p>Gender: ${user.gender}</p>
        <p>Country: ${user.location.country}</p>
      </div>      
    `;
    // Appending the user card to the container
    container.appendChild(userDiv);
  });
}
// Initiating the fetch operation
fetchUsers();