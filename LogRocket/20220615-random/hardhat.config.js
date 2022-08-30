require("@nomiclabs/hardhat-waffle");
require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.4",

  networks: {
    "goerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/HGGkG7xu01T_819m8Kyf6Ag7xIUkezJn",
       accounts: ["f08b9548f35aac2cd0fdd9e59b0234f24386c3ec4389edd257cfd7a91e37d097"]
    }
  }

};
