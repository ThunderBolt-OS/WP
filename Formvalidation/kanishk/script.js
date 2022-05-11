
function validate() {
let form = document.getElementById("form-sample");
    let helperMsg = document.getElementsByClassName("helper-msg")[0];
    
    let validityParams = [
        { // For Email
            passing: /\w@\w/.test(form["email"].value),
            helpMsg: "Email is invalid"
        },
        { // For name
            passing: form["name"].value.length > 3,
            helpMsg: "Name should be longer"
        },
        {   // For password
            
            passing: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/.test(form["password"].value),
            helpMsg: "Not a strong password"
        }
    ]


    let failingParam = validityParams.findIndex(param => param.passing == false)
    if (failingParam != -1)
        helperMsg.innerHTML = validityParams[failingParam].helpMsg
    else 
        helperMsg.innerHTML = ""

//print json object
        const data = new FormData(event.target);
        const formJSON = Object.fromEntries(data.entries());
        const results = document.querySelector('.results');
        results.innerText = JSON.stringify(formJSON, null, 2);
    return false;
}

// function handleform(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const formJSON = Object.fromEntries(data.entries());
//     const results = document.querySelector('.results');
//     results.innerText = JSON.stringify(formJSON, null, 2);
//     return false;
//   }
  
