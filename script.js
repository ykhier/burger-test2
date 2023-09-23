function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_znuvueh";
    const templateID = "template_xc2fpc9";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}

function cardClicked() {
    const cards = document.querySelectorAll('.burger-card');

    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            // Apply a transform to the clicked card
            card.style.transform = 'scale(1.05)';

            // Reset the other cards to their initial state
            cards.forEach((otherCard, otherIndex) => {
                if (index !== otherIndex) {
                    otherCard.style.transform = 'scale(1)';
                }
            });
        });
    });
}
