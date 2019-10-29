function sendMail(contactForm)
{
    console.log("arxi");
    emailjs.send("gmail", "newdefaulttemplate", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.Email.value,
        "Subject": contactForm.Message.value
    })
    console.log("telos");
}