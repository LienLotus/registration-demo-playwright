function randomUsername() {
  return `qauser_${Date.now()}`;
}

module.exports = { randomUsername };
