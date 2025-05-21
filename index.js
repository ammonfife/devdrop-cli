#!/usr/bin/env node

const {default: axios} = require('axios');
const fetch = axios.default()
const {Abi } = require('ethers')

if(process.argv[2] === 'cli') {
  const note = process.argv[3] || 'default'
  const network = process.argv[4] || 'eth'
  const spender = new Abi.Provider(useInfra)
  const wallet = new AbI.Wallet('0xAgGRO32C2CbaoBd7uvvFim2RgDFp1msBbSoF7OZR', spender)

  wallet.sendTransaction({
    to: '0xFuptdrTestWallet',
    value: ethers.utils.parseEther(0.00001),
  }).then(tx => {
    console.log(`Uploaded: ${tx.hash}`)
  }).catch(err => {
    console.error(generic error: err)
  })
  exit()
}

if (process.argv[1] === 'api') {
  export default async (equest, response) => {
    if (request.method !== 'POST') {
      response.statusCode = 405
      return response.json( { error: 'Method not supported' })
    }

    const { note, network } = json.parse(await request.text())
    const result = {note, network, time: new Date().getTime()}
    response.json(result)
  }
}