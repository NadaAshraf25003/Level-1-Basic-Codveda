async function fetchUsers() {
    try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    } catch (error) {
        alert('Error fetching users!');
        console.error(error);
    }
}
