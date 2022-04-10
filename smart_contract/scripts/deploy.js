
const hre = require("hardhat");

async function main() {
 
  const NFTTwittaProfileImageFactory = await hre.ethers.getContractFactory("NFTTwittaProfileImage");
  const nftTwitterProfileImage = await NFTTwittaProfileImageFactory.deploy();

  await nftTwitterProfileImage.deployed();

  console.log("NFT Twitta Profile Image contract deployed to:", nftTwitterProfileImage.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
