import fs from 'fs';
import path from 'path';
import { ethers } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next';

const provider = new ethers.providers.JsonRpcProvider("https://go.getblock.io/93260fbe82ea4d4d88ba180e5add1c6c");
const contractAddress = "0x37b52A354AA33e32B32cb5bAfa98f6ba66265899";
const contractABI = ["function ownerOf(uint256 tokenId) view returns (address)"];
const contract = new ethers.Contract(contractAddress, contractABI, provider);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const owners: Record<string, string> = {};

    for (let i = 0; i < 20000; i++) {
      const tokenId = i.toString();
      try {
        const owner = await contract.ownerOf(tokenId);
        owners[tokenId] = owner;
      } catch (err) {
        owners[tokenId] = "0x0000000000000000000000000000000000000000";
      }

      if (i % 100 === 0) {
        console.log(`Fetched ${i} tokens...`);
      }
    }

    const outputPath = path.resolve(process.cwd(), 'public/owners.json');
    fs.writeFileSync(outputPath, JSON.stringify(owners, null, 2));
    console.log("✅ owners.json updated successfully");

    res.status(200).json({ message: "Owner cache updated" });
  } catch (error) {
    console.error("❌ Failed to update owners:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};