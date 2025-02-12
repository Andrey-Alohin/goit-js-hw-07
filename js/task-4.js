const form = document.querySelector(".login-form");
form.addEventListener("submit", submit)

function submit (event) {
    event.preventDefault();
    const formData = event.target;
    const userData = {};
    userData.email = formData.elements.email.value.trim();
    userData.password = formData.elements.password.value.trim();
    if (userData.email.replace(/ /g, "") !== "" && userData.password.replace(/ /g, "") !== "") {
        console.log(userData);
        formData.reset();
    } else {
        alert("All form must be filled in");
    }
}



// function submit (event) {
//     event.preventDefault();
//     const userData = {};
//     const formData = new FormData(event.target);
//     formData.forEach((value, key) => {
//         if (value.replace(/ /g, "") !== "") {
//            userData[key] = value.trim(); 
//         } else  {
//             value = "";
//             alert(`All form must be filled in. Don't use spaces in ${key}`);
//             return;
//         }
//     })
//     console.log(userData);
// }
