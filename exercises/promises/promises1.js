/**
 * We need to paste the entire message to save the detonation!
 *
 * Create a function that returns the entire message! Check the mid
 * functions, maybe its something left with the params that functions
 * need to receive.
 *
 */

function getMessageFirstPart() {
  return new Promise((resolve) => setTimeout(() => resolve("The code to"), 2000));
}

function getMessageSecondPart() {
  return new Promise((resolve) => setTimeout(() => resolve("stop the bomb is"), 1000));
}

function getMessageThirdPart() {
  return new Promise((resolve) => setTimeout(() => resolve("KUniversity2020"), 0));
}

function getCompleteMessage() {
  // TODO: Implement
}

module.exports = {
  getCompleteMessage,
};
