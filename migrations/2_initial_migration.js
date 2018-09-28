var TelephoneCaller = artifacts.require("./TelephoneCaller.sol");

module.exports = function(deployer) {
  deployer.deploy(TelephoneCaller);
};
