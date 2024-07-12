import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'
require("dotenv").config()


export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    arbitrumMainnet: {
      url: `https://arbitrum.llamarpc.com`,
      accounts: [process.env.NEW_DEPLOYER],
      chainId: 42161,
      gasPrice: 11000000,
      gasLimit: 10000000000,
    },
    bscMainnet: {
      url: `https://bsc-dataseed1.ninicoin.io`,
      accounts: [process.env.NEW_DEPLOYER],
      chainId: 56,
     // gasPrice: 5100000000,
      //gasLimit: 10000000 ,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
}
