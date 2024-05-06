
let users = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
];

function homeWork4(users) {
    users.forEach(user => {
        user.admin = false;
    });


    let array = users.find(users => users.name === "Маша");
    array.admin = true;

    return users;
}

console.log(homeWork4(users));
