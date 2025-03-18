let user = JSON.parse(localStorage.getItem('user')) || [];

const addUser = () => {

    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let dup = user.find(val => val.email === email);

    if (dup) {
        alert("This email is already exist! use another..");
        return;
    }

    let obj = {
        name: name,
        email: email,
        password: password

    }

    user.push(obj);
    localStorage.setItem('user', JSON.stringify(user));

    window.location.href = "./login.html"
}



let localuser = JSON.parse(localStorage.getItem('user')) || [];

const loginUser = () => {

    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (localuser.length === 0) {
        alert("No registered users found. Please sign up first!");
        return;
    }

    let checkUser = localuser.find((val) => {
        return val.email == email && val.password == password;
    })

    if (checkUser) {
        alert("Login Successfully");


        localStorage.setItem("currentuser", JSON.stringify(checkUser));
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password");
        document.getElementById('email').value = "";
        document.getElementById('password').value = "";
    }



}