document.addEventListener("DOMContentLoaded", function () {
    fetch("/users")
        .then(response => response.json())
        .then(data => {
            const userTable = document.getElementById("userTable");

            data.forEach(user => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${user.user_id}</td>
                    <td>${user.user_name}</td>
                    <td>${user.user_email}</td>
                    <td>${user.total_orders}</td>
                    <td>${user.created_at}</td>
                    <td>${user.last_logged_in}</td>
                `;
                userTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
});