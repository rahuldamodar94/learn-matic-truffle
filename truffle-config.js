var HDWalletProvider = require("truffle-hdwallet-provider");
let config = require("./config.json");

const MNEMONIC = config.secret;
module.exports = {
  networks: {
    matic: {
      provider: () =>
        new HDWalletProvider(MNEMONIC, `https://rpc-mumbai.matic.today`),
      network_id: 80001,
      gas: 7000000,
      gasPrice: 10000000000, // 10 gwei
      skipDryRun: true,
      // confirmations: 5
    },
  },
  compilers: {
    solc: {},
  },
};
