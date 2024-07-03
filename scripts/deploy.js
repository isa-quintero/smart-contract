const { ethers } = require("ethers");

async function main() {
    const gasPrice = ethers.utils.parseUnits("1", "gwei"); // Gas Price de 1 gwei (1,000,000,000 wei)
    const Offer = await ethers.getContractFactory("Offer");
    const offer = await Offer.deploy(
        gasPrice,
      1, // productId
      1, // farmerId
      "Description of the offer", // description
      100, // amount
      150, // price (multiplicado por 100 para manejar 2 decimales)
      Math.floor(Date.now() / 1000), // initialDate (timestamp en segundos)
      Math.floor(Date.now() / 1000) + 3600, // finalDate (timestamp en segundos)
      true, // validity
      "blockchain_id" // idBlockchain
    );
  
    await offer.deployed();
    console.log("Contract deployed to address:", offer.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
  