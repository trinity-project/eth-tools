var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "certain ring gallery rose panther verify devote speed scatter injury attack leader";
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
	networks: {
	  ropsten: {
	    provider: function() {
	      return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/8c80ada0abed45fcb870972389a3ad4a");
	    },
	    network_id: '3',
	    gas:1000000
	  },
	  localhost: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" ,// Match any network id
      gas:1000000
	  },
	}
}