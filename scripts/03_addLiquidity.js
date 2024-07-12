const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");
const bn = require("bignumber.js");
const hre = require("hardhat");

bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });

const config = require("./config");

async function main() {
  const governance = config.governance;
  const defiedgePoolAddress = config.defiedgeV3Pool;
  const amount = "9000000000000000000"

  const token0Add = "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1";//weth
  const token1Add = "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1";//dai

  const defiedgePool = await ethers.getContractAt("DefiedgeV3Pool", defiedgePoolAddress);

  // const token0 = ethers.getContractAt("IERC20Minimal", token0Add);
  // const token1 = ethers.getContractAt("IERC20Minimal", token1Add);

  // await token0.approve(defiedgePoolAddress, amount)
  // await token1.approve(defiedgePoolAddress, amount)
  // console.log("approved");

  await defiedgePool.mint(
    "0x82E1a0A4f2bEA7957a2F4F01Ce2020b0b4178F35",
    "79260", //lower tick
    "80640", //upper tick
    "522601476825961", //amount
    "0x",//calldata
    {
      gasLimit: 5000000 // Example manual gas limit
    }
  );
  
 

  

  
  







  






}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });