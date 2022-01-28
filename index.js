

function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        thankYouMessages.push(message);
    }
    return thankYouMessages;
}


function countDown() {
    let countdown = 10 

    while (countdown > -1) {


        console.log(countdown--);
    }
}




