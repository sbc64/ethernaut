const Web3 = require('web3')
const HDWalletProvider = require("truffle-hdwallet-provider");

const url = 'https://rinkeby.infura.io/' + process.env.INFURA_API


const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  "https://ropsten.infura.io/" + process.env.INFURA_API
)

const w3 = new Web3(url),
w3.eth.setProvider(provider)


module.exports = {
  w3
}
