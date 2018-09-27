#!/usr/bin/env node

const {w3, account} = require('../provider')
const CoinFlip = require('../../build/contracts/CoinFlip.json')
const addr = '0x1707d95fca6390ca99f9bf882acbf5957350b7e3'
const instance = new w3.eth.Contract(CoinFlip.abi, addr)

var FACTOR = w3.utils.toBN('57896044618658097711785492504343953926634992332820282019728792003956564819968')


const broadcastTxn = async guess => {

  const txn = {
    data: await w3.eth.abi.encodeFunctionCall(CoinFlip.abi[2], [guess]),
    from: account.address,
    gas: 51000,
    gasPrice: await w3.utils.toWei('0.000001'),
    nonce: await w3.eth.getTransactionCount(account.address),
    to: addr,
  }
  const rawTxn = await w3.eth.accounts.signTransaction(txn, account.privateKey)

  return w3.eth.sendSignedTransaction(rawTxn.rawTransaction)
}

const sleep = (ms) => {
  return new Promise(resolve=>{
    setTimeout(resolve, ms)
  })
}

const main = async () => {
  console.log('MAAAIN')
  let lastBlock = await w3.eth.getBlock('latest')
  while (true) {
    const block = await w3.eth.getBlock('latest')
    const blockValue = w3.utils.toBN(block.hash)

    if (block.number === lastBlock) {
      console.log('Same block')
    } else {
      console.log('Old block: ', lastBlock.number)
      console.log('New block: ', block.number)
      lastBlock = block.number
      const receipt = await broadcastTxn(blockValue.div(FACTOR).toNumber() === 1)
      console.log('Accepted block:', receipt.blockNumber)
    }

    const wins = await instance.methods.consecutiveWins().call()
    console.log('Wins', wins)
    if (wins === 10) {
      console.log('DONE')
      break
    }

    console.log()
    await sleep(500)
  }
}

main()
