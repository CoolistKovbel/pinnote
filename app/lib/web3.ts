import { ethers } from "ethers";


// Token Contract
export const contractTokenContract =
  "0xfDafC18c6BeF2F153f5D0F14fdF8f0B8edc19b04";

  // NFT Contract
export const ContractNFTCollection =
  "0xEb8556C96e176cA3458184AEA79933be154d64a2";

  
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

    const amountInWei =  ethers.utils.parseEther((0.0210 * _amount).toString())

    console.log("amountInWei", amountInWei);


    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      ContractNFTCollection,
      dApp,
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
      tokenAbs,
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
