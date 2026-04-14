var rows = document.querySelector('#rows');

async function fetchUsers() {
    const rawRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await rawRes.json();

    console.log(users);

    users.forEach((user, idx) => {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = idx + 1;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = user.name;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = user.email;
        tr.appendChild(td3);

        let td4 = document.createElement('td');
        td4.innerHTML = user.phone;
        tr.appendChild(td4);

        let td5 = document.createElement('td');
        td5.innerHTML = user.company.name;
        tr.appendChild(td5);

        rows.appendChild(tr);
    });
}

fetchUsers();
