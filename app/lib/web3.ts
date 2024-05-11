import { ethers } from "ethers";
import tokenABI from "./tokenABI.json"
import erc721TokenAbi from "./erc721TokenAbi.json"
// Token Contract
export const contractTokenContract =
  "0x3336deBc102ce50a707CF8Df8c626aB338D55539";

  // NFT Contract /testnet
export const ContractNFTCollection = "";

  
export const getEthereumObject = () => {
  return typeof window !== "undefined" ? window.ethereum : null;
};

export const getEthereumAccount = async () => {
  try {
    const ethereum: Window = getEthereumObject();

    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    const accounts = await ethereum.request({ method: "eth_requestAccounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      return account;
    } else {
      alert("connect your metamask account....");

      // Setup another alert
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const mintNFT = async (_amount: any) => {
  try {
    console.log("minting nft", _amount)

    const amountInWei =  ethers.utils.parseEther((0.042 * _amount).toString())

    console.log("amountInWei", amountInWei);


    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      ContractNFTCollection,
      erc721TokenAbi,
      signer
    );

    await contractInstance.mint(_amount, {
      value: amountInWei,
      gasLimit: 300000,
    });


  } catch (error) {
    console.log(error);
  }
};

export const swapToken = async (_amount: any) => {
  try {
    console.log("swapping token");

    const amountInWei = ethers.utils.parseEther(_amount.toString());

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      contractTokenContract,
      tokenABI,
      signer
    );

    await contractInstance.swapEtherForTokens({
      value: amountInWei,
      gasLimit: 600000,
    });


  } catch (error) {
    console.log(error);
  }
};
