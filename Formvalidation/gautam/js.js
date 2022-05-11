function validateCommentBox() {
    let form = document.getElementById("comment-box").elements;
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
        {
            passing: form["rating"].value != "",
            helpMsg: "Please select a rating"
        }
    ]

    let failingParam = validityParams.findIndex(param => param.passing == false)
    if (failingParam != -1)
        helperMsg.innerHTML = validityParams[failingParam].helpMsg
    else 
        helperMsg.innerHTML = ""

    return false;
}