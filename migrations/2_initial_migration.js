var Airdropper = artifacts.require("./Airdropper.sol");

module.exports = function(deployer) {
  deployer.deploy(Airdropper);
};
