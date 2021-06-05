const MyToken = artifacts.require('./SuperHToken'); // dove "SuperHToken" tra parentesi è il nome del contratto nel file solicity

module.exports = async function(deployer) {
  deployer.deploy(MyToken);
};
