const Web3 = require('web3')

// const rpcTestURL = 'https://bsc-testnet.web3api.com/v1/MVTAHM8B8455QKC5JJJBD5S3P9B9WHFVUD'
const rpcMainURL = 'https://bsc-mainnet.web3api.com/v1/MVTAHM8B8455QKC5JJJBD5S3P9B9WHFVUD'

const web3 = new Web3(rpcMainURL)

export default web3;