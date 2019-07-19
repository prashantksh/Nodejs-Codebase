class Bank {
  handleCardSwipe(details) {
    console.log(
      `New card swipe: Card Number ${details.cardNumber}, Name: ${
        details.name
      }, Amount: ${details.amount}`
    );
  }
}

module.exports = Bank;
