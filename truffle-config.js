const HDWalletProvider = require('@truffle/hdwallet-provider');

let devUrl = 'http://127.0.0.1:7545/';
let mnemonic = 'grid process orient venture stomach cost shift protect inflict another army general';   
let testAccounts = [
"0x014a11751d5b76208e0ab0edcf9bd0da7bc835fe482830662f2a30e708a46c3a",
"0xd185904ef892c11641cf0fff0d6afc07d45226e4e10cc1d4da6ce622c4ab124c",
"0xf2d6292c3a3681ad6121f8f2d52227300c538fea4154c918821d90b5c7280d39",
"0xee667882bfcac8a1b991ca48601e91b0337de289a7e6cdc722a9d491e4ee2b62",
"0x158eb49738824b42f92e758bd32d87e36a4dc60fb135057153247050b18bdabd",
"0x866ece76cf7ca06a565479c20f8667fe76a18bf5b67f1f664587b7c5146a025a",
"0x8bcc7d939180cec9650ec023de31ed1448238db3819b19afedb72d5910119f23",
"0x41463d07d88e4886ca80f0b98204ebdd18100470870a0c8272bcf8c42c74a298",
"0x5e50ad8d483a49f4a11f028b6cc2d6c4da68a2563debb3d32c1bd04d7ebff535",
"0xee584f9df2c688f16e7431f7212e9d611b319819408cb4df52f24e8c92ad2b03"
];  

module.exports = {
  networks: {
    development: {
      url: devUrl,  // Required for DappStarter config generation
      provider: () => new HDWalletProvider(
                                      testAccounts,
                                      devUrl,           // provider url
                                      0,                // address index
                                      10,               // number of addresses
                                      true,             // share nonce
                                      `m/44'/60'/0'/0/` // wallet HD path
                                    ),
      network_id: '*'
    }
  },
  compilers: {
    solc: {
      version: '^0.5.11'
    }
  }
};
