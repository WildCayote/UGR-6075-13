
function login(){
    let password = document.forms["signIn"]["password"].value;
    let email = document.forms["signIn"]["email"].value;

    if (password === "user" && email === "user"){
        alert("You have logged in successfuly!")
        window.location.assign('homePage.html')
    } else{
        alert("Incorrect Credentials")
    }
}

function create(){
    let email = document.forms["signUp"]["uname"].value
    let userName = document.forms["signUp"]["uname"].value;
    let date = document.forms["signUp"]["date"].value;
    let month = document.forms["signUp"]["month"].value;
    let year = document.forms["signUp"]["year"].value;
    let password = document.forms["signUp"]["password"].value;
    let confPassword = document.forms["signUp"]["confPass"].value;

    if (email.length != 0 && userName.length != 0 && password === confPassword && month > 0 && month < 13 && year > 0 && year < 2024 && date > 0 && date < 32){
        alert('Account created successfuly!');
        window.location.assign("index.html")
    }else{
        alert('Fill the form properly!')
    }

}


function out(){
    window.location.assign("index.html")
}