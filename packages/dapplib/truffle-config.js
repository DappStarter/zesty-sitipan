require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'kidney clog tackle venture strong regret spider come gesture immense army ghost'; 
let testAccounts = [
"0x8ae07e2bc98ee9706fffa631e7f79abfdf42e0cbaaa86eeed478b6c0f556f606",
"0xd14c57129a414f585b8502d4f357f4ab8a39f35829b0b4cba3a60ce55bda7cea",
"0x9f56676f8fa2d71d2d152d54cbcfc222c2e692aeb2195dc9f3ec8942eec6aeb1",
"0xe63bbfbd289e34f8bd449c06c33c2eb0a3593b525d4e1e69e7b1c0493a02b2cb",
"0x712e8f9dbe0c3796635f6d44bd29f30e083a3598e177ed58572b0b1d63530850",
"0x237a569633a1f0a874b966bfd2478cea67a89fdc0b34a10f8a2696d3ff08b3f9",
"0xddce987849a2b8bcc6db656eb821c4032fce816e7e65d60b8aefa22015d5d435",
"0x93ef22ac66a04bbe55f4dde6f77a4d73545442786513afb236ac875de94b158c",
"0x6e0aa58338a050d643af99f85f433878c1ddd152167ea5ec388479924a351917",
"0x08b932cfe046409e7bca06d11261fd161791444f95c2b9ee37bb81a148070734"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


