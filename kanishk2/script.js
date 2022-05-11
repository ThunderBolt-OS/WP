
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
//create json file
        const blob = new Blob([results.innerText], {type: 'application/json'});
        const link = document.getElementById('download');
        link.href = URL.createObjectURL(blob);
        link.download = 'form.json';
        link.innerText = 'Download JSON';
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

function getXml(){
    var elements = document.getElementById("form-sample");
    var xmlTemplate = '<?xml version="1.0"?> <formData>';
    for(var i =0; i< elements.length; i++){
        var element = elements[i];
        if(element.tagName=="INPUT"){
            xmlTemplate = xmlTemplate + '<'+element.name+'>' + element.value+'</'+element.name+'>';
        }
    }
    xmlTemplate = xmlTemplate +'</formData>';
//    download xml
    var blob = new Blob([xmlTemplate], {type: 'application/xml'});
    var link = document.getElementById('download2');
    link.href = URL.createObjectURL(blob);
    link.download = 'form.xml';
    link.innerText = 'Download XML';
   return false;
}

// getXml();
  
