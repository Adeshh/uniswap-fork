const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");
const bn = require("bignumber.js");
const hre = require("hardhat");

bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });

const config = require("./config");

async function main() {
  const governance = config.governance;
  const wethAddress = config.weth9;
  //const uniswapFactoryAddress = config.uniswapV3Factory;
  
  let DefiedgeV3Factory = await ethers.getContractFactory("DefiedgeV3Factory");
  const defiedgeV3Factory = await DefiedgeV3Factory.deploy();
  console.log("defiedgeFactory address is:", defiedgeV3Factory.address);






  






}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });