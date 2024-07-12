const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");
const bn = require("bignumber.js");
const hre = require("hardhat");

bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });

const config = require("./config");

async function main() {
  const governance = config.governance;
  const defiedgeFactoryAddress = config.defiedgeV3Factory;

  const token0 = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";//weth
  const token1 = "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1";//dai

  const defiedgeFactory = await ethers.getContractAt("DefiedgeV3Factory", defiedgeFactoryAddress);
  
  await defiedgeFactory.createPool(token0, token1, "3000");//0.3%

  const pool = await defiedgeFactory.getPool(token0, token1, "3000");
  console.log("pool address is: ", pool)

  
  







  






}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });