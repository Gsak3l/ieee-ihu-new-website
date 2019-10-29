function sendMail(contactForm)
{
    emailjs.send("gmail", "newdefaulttemplate", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.Email.value,
        "Subject": contactForm.Message.value
    })
    .then(
        function(response)
        {
            console.log("success", response);
        }, 
        function(erorr)
        {
            console.log("FAIL");
        }
    )
}