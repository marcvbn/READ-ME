function showResponse(answer) {
    const responseMessage = document.getElementById('responseMessage');
    
    if (answer === 'yes') {
        responseMessage.textContent = "Yay! 💕 I'm so happy you said yes! 😄 Let's make this Valentine's Day special!";
    } else {
        responseMessage.textContent = "Aww... 😔 That's okay, I'll still always care about you! 💖";
    }
    
    // Disable the buttons after answering
    document.getElementById('yesButton').disabled = true;
    document.getElementById('noButton').disabled = true;
}
