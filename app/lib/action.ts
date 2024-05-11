"use server";

export const mintNfts = async (state: any, formData: FormData) => {
  const { amountOfNFTs } = Object.fromEntries(formData);

  try {
    console.log("minting nfts i guess", amountOfNFTs);
    return amountOfNFTs
  } catch (error) {
    console.log(error);
    return "error"
  }
};
