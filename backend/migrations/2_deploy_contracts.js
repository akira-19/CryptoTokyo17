var Booking = artifacts.require("Booking");

module.exports = function(deployer) {
  deployer.deploy(Booking, "test", "test");
};
