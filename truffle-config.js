const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

// Configurazione rete Testnet BSC
const secretKeyTestnet = fs.readFileSync(".secretKeyTestnet").toString().trim();
const endpointTestnet = 'https://data-seed-prebsc-1-s1.binance.org:8545';
const providerTestnet = new HDWalletProvider([secretKeyTestnet], endpointTestnet);

// Configurazione rete Mainnet BSC
const secretKeyMainnet = fs.readFileSync(".secretKeyMainnet").toString().trim();
const endpointMainnet = 'https://bsc-dataseed1.ninicoin.io/';
const providerMainnet = new HDWalletProvider([secretKeyMainnet], endpointMainnet);

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777
    },
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    testnet_bsc: {
      provider: () => providerTestnet,
      network_id: 97,
      confirmations: 3,
      timeoutBlocks: 600,
      skipDryRun: true,
      gasLimit:300000
    },
    mainnet_bsc: {
      provider: () => providerMainnet,
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 500,
      skipDryRun: true,
      // gas: 3000000000
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },


  //contracts_directory: "./src/contracts/",
  //contracts_build_directory: "./src/abis/",

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "istanbul",
      },
    },
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled: false to enabled: true
  //
}
