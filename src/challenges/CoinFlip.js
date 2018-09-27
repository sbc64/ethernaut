#!/usr/bin/env node

const {w3, account} = require('../provider')
const CoinFlip = require('../../build/contracts/CoinFlip.json')
const addr = '0x1707d95fca6390ca99f9bf882acbf5957350b7e3'
const instance = new w3.eth.Contract(CoinFlip.abi, addr)

var FACTOR = w3.utils.toBN('57896044618658097711785492504343953926634992332820282019728792003956564819968')


var lastBlock = 0
w3.eth.getBlock('latest').then(block => {
  lastBlock = block
})

const broadcastTxn = async guess => {

  console.log('Gueess', guess)
}

const main = async () => {
  console.log('MAAAIN', 
  const block = await w3.eth.getBlock('latest')
  const blockValue = w3.utils.toBN(block.hash)

  if (block === lastBlock) {
    console.log('Same block')
  } else {
    broadcastTxn(blockValue.div(FACTOR).toNumber() === 1 ? true : false)
  }
}


while (true) {
  var timeout = 5000
  setTimeout(main, timeout)
}
