async function main() {
  const RogerNFT = await ethers.getContractFactory("RogerNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const rogNFT = await RogerNFT.deploy();
  console.log("Contract deployed to address:", rogNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
