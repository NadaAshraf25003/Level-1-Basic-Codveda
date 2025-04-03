async function fetchUsers() {
    try {
        const response = await fetch("http://localhost:3000/users"); // Adjust the URL based on your API
        const users = await response.json();

        const usersList = document.getElementById("usersList");
        usersList.innerHTML = ""; // Clear previous data

        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            usersList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}
