require('dotenv').config()
const Web3 = require('web3')
const hdkey = require('ethereumjs-wallet/hdkey')
const w3 = new Web3('https://ropsten.infura.io/' + process.env.INFURA_API)

const pk = hdkey.fromMasterSeed(
    process.env.MNEMONIC
  ).getWallet().getPrivateKey()

const account = w3.eth.accounts.privateKeyToAccount(pk)

module.exports = {
  account,
  w3
}
