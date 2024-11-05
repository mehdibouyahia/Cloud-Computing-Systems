function handTotal(hand) {
  let total = 0;
  let aces = [];

  for (let i = 0; i < hand.length; i++) {
    total += hand[i].value;
    if (hand[i].rank === "Ace") {
      aces.push(hand[i]);
    }
  }

  while (aces.length > 0 && total > 21) {
    total -= 10;
    aces.pop();
  }

  return total;
}
