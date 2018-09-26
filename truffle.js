var HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  compilers: {
    solc: {
      version: "0.4.18",
      docker: true
    }
  },
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC,
          "https://ropsten.infura.io/" + process.env.INFURA_API
        )
      },
      network_id: '4'
    }
  }
}
