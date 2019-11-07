
// in this file you can append custom step methods to 'I' object

const customActor = () => {
  const I = actor();
  I.customClearField = async function (locator) {
    this.click(locator);
    this.pressKey(["control", "a"]);
    this.pressKey("Delete")

  };
  return I;
};
module.exports = customActor();