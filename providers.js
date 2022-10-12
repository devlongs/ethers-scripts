import "dotenv/config";
import { ethers } from "ethers";

//const provider = ethers.getDefaultProvider(); // the easiest way to get a provider, but should be for testing purposes.

// To connect to a custom RPC URL:
const InfuraUrl = `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`;
const provider = new ethers.providers.JsonRpcProvider(InfuraUrl);

// console.log("Current block number", await provider.getBlockNumber())
//console.log("atg.eth is", await provider.resolveName("atg.eth"));
//console.log("0x34aA3F359A9D614239015126635CE7732c18fDF3 is", await provider.lookupAddress("0x34aA3F359A9D614239015126635CE7732c18fDF3"));

const vitalikBalance = await provider.getBalance("vitalik.eth");
let sanfordBalance = await provider.getBalance("sanfordstout.eth");
const longsBalance = await provider.getBalance("0x9985Bb45769af9CA122EF0bAbf69b237DF6c2033")

sanfordBalance = sanfordBalance.add(ethers.utils.parseEther("5000"));

console.log("sanford balance", ethers.utils.formatEther(sanfordBalance));
console.log("vitalik balance", ethers.utils.formatEther(vitalikBalance));
console.log("Longs balance, formated", ethers.utils.formatEther(longsBalance));
console.log("Longs Balance", longsBalance.toString());

if (vitalikBalance.gt(sanfordBalance)) {
  console.log("Vitalik has more ETH than sanford");
} else {
  console.log("Sanford has more ETH than Vitalik");
}
