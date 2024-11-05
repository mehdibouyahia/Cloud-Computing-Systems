function handTotalRefactored(hand) {
  let totalHandValue = hand.reduce((sum, card) => sum + card.value, 0); // Calculate the total value of the hand assuming aces as 11
  const aces = hand.filter((card) => card.rank === "Ace"); // Filter out the aces from the hand
  while (aces.length > 0 && totalHandValue > 21) {
    totalHandValue -= 10; /* If the total value of the hand is greater than 21, reduce the total value by 10
      so that the ace would be considered as 1 instead of 11 */
    aces.pop();
  }
  return totalHandValue;
}

const hand = [
  { rank: "Ace", value: 11 },
  { rank: "Ace", value: 11 },
  { rank: "8", value: 8 },
];

const total = handTotalRefactored(hand);

console.log(total);
