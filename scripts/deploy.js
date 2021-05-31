const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    // Uniswap V3: Factory 
    console.log("Deploying Factory...");
    const Factory = await ethers.getContractFactory("UniswapV3Factory");
    const factory = await Factory.deploy();
    console.log("Factory address:", factory.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });