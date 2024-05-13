require("@nomicfoundation/hardhat-toolbox");

// Ensure your configuration variables are set before executing the script
const { vars } = require("hardhat/config");

// Go to https://alchemy.com, sign up, create a new App in
// its dashboard, and add its key to the configuration variables      UQU5DY8SR-x5Ny_HkGs9O2_TZdNfHaUY
const ALCHEMY_API_KEY = vars.get("ALCHEMY_API_KEY");

// Add your Sepolia account private key to the configuration variables
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts               b845f6d92a6c79a9acd5b7f6568148ba6e04a36d857e42194ee74419ab4ee1f9
const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
      // gas: 2100000,            
      // gasPrice: 8000000000,    
    },
  },
};


// hardhat.config.js
// require("@nomiclabs/hardhat-waffle");
// require("@nomiclabs/hardhat-ethers");

// module.exports = {
//   networks: {
//     sepolia: {
//       url: "<Sepolia RPC URL>",
//       accounts: ["<Your private key>"]
//     }
//   },
//   solidity: "0.8.0",
// };
