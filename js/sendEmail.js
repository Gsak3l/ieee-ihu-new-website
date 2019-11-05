function sendMail(contactForm){
    console.log(contactForm.name.value);
    console.log(contactForm.Email.value);
    console.log(contactForm.Message.value);
    emailjs.send("gmail", "newdefaulttemplate", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.Email.value,
        "Subject": contactForm.Message.value
    });
    contactForm.name.value = "";
    contactForm.Email.value = "";
    contactForm.Message.value = "";
    document.getElementById('msgs').innerText = "Message Sent Successfully";
}