function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        subject: document.querySelector("#subject").value,
        whatsapp: document.querySelector("#whatsapp").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    };

    emailjs
        .send("service_3c945mh","template_i4wx4t9",templateParams)
        .then(() => alert("Email sent!!")
        .catch(() => alert("Email not sent!!")));
} 