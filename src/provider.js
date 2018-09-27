require('dotenv').config()
const bip39 = require('bip39')
const Web3 = require('web3')
const hdkey = require('ethereumjs-wallet/hdkey')

const wallet = hdkey
  .fromMasterSeed(bip39.mnemonicToSeed(process.env.MNEMONIC))
  .derivePath("m/44'/60'/0'/0/0")
  .getWallet()

module.exports = {
  account: w3.eth.accounts.decrypt(wallet.toV3(''), ''),
  w3:new Web3('https://ropsten.infura.io/' + process.env.INFURA_API)
}
