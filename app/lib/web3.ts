import { ethers } from "ethers";
import { Network, Alchemy } from 'alchemy-sdk';
import nftJasn from "./nftab.json";
import tokenAbi from "./tokenAbi.json"
import { sign } from "crypto";

export const nftSmartContract = "0x62F38d44fB243C3C98B23636074414ED53ecBB1E";
export const tokenSmartContract = "0x3336debc102ce50a707cf8df8c626ab338d55539";

export const testERC721Contract = "0x7092bCB11dBb1c3D1891BFFdCb1aEc1280419b77"
export const testERC20Contract = "0xA4b6FA3f347A9DDA82ce5889719c4dbC40507950"


// Alchemy shit : maybe later....


// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: 'demo', // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);





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

// Approve contract token user erc + erc20

export const mintNFT = async (_amount: any) => {
  try {
    console.log("minting nft");
    // const amountInWei = ethers.utils.parseEther((0.024 * _amount).toString());
    const amountInWei = ethers.utils.parseEther((0.00042 * _amount).toString());

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      testERC721Contract,
      nftJasn,
      signer
    );

    await contractInstance.mint(_amount, {
      value: amountInWei,
      gasLimit: 600000,
    });


    return "success"


  } catch (error) {
    console.log(error);
  }
};

export const swapToken = async (_amount: any) => {
  try {
    console.log("swapping token");

    // Convert the input amount to a BigNumber object
    const amountInWei = ethers.utils.parseEther(_amount.toString());

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      testERC20Contract,
      tokenAbi,
      signer
    );

    await contractInstance.swapEtherForTokens({
      value: amountInWei,
      gasLimit: 600000,
    });

    return "success"

  } catch (error) {
    console.log(error);
  }
};

export const getContractDetails = async () => {
  console.log("getting contract details");
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();
    const account = await signer.getAddress()

    // Contract main
    const contractInstance = new ethers.Contract(
      nftSmartContract,
      nftJasn,
      signer
    );

    const tokenSupply = await contractInstance.callStatic.tokenSupply();
    const tokenSymbol = await contractInstance.callStatic.symbol();

    console.log("checking contract, sad life kill me please. :) " )
    const acountInLounge = await contractInstance.VIPLounge(account)



    const payload = {
      tokenSupply,
      tokenSymbol,
      userInLounge: acountInLounge
    };



    return {
      status: "success",
      payload: payload,
    };
  } catch (error) {
    console.log("Error getting contract details", error);
    return {
      status: "error",
      payload: error,
    };
  }
};

export const getContractDetailsForERC20 = async () => {
  console.log("handling contract erc20 token details");
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // Get the signer
    const signer = provider.getSigner();

    // Contract main
    const contractInstance = new ethers.Contract(
      tokenSmartContract,
      tokenAbi,
      signer
    );

    const annualInterest = Number(
      await contractInstance.callStatic.annualInterest()
    );
    const tokenSymbol = await contractInstance.callStatic.symbol();
    const tokenPerEth = Number(await contractInstance.callStatic.tokenPerEth());
    const tokenName = await contractInstance.callStatic.name();

    const payload = {
      annualInterest,
      tokenSymbol,
      tokenPerEth,
      tokenName,
    };

    return {
      status: "success",
      payload: payload,
    };
  } catch (error) {
    console.log("error getting erc20 contract details", error);
    return {
      status: "error",
      payload: error,
    };
  }
};
