const { ethers } = require("ethers");
const fs = require("fs");
const path = require("path");

// Configuration
const RPC_URL = "https://go.getblock.io/93260fbe82ea4d4d88ba180e5add1c6c";
const CONTRACT_ADDRESS = "0x37b52A354AA33e32B32cb5bAfa98f6ba66265899";
const ABI = [
  "function ownerOf(uint256 tokenId) external view returns (address)"
];
const TOTAL_TOKENS = 20000;
const BATCH_SIZE = 10;
const DELAY_MS = 3000;

const OUTPUT_PATH = path.join(__dirname, "../../public/owners.json");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
  const owners = {};

  for (let i = 0; i < TOTAL_TOKENS; i += BATCH_SIZE) {
    const batch = Array.from({ length: BATCH_SIZE }, (_, j) => i + j).filter(
      (id) => id < TOTAL_TOKENS
    );

    const results = await Promise.allSettled(
      batch.map(async (tokenId) => {
        try {
          const owner = await contract.ownerOf(tokenId);
          return { tokenId, owner };
        } catch (err) {
          console.error(`❌ Token ${tokenId} failed: ${err.message}`);
          return null;
        }
      })
    );

    results.forEach((res) => {
      if (res.status === "fulfilled" && res.value) {
        owners[res.value.tokenId] = res.value.owner;
      }
    });

    console.log(`✅ Processed tokens ${batch[0]} to ${batch[batch.length - 1]}`);
    await new Promise((r) => setTimeout(r, DELAY_MS));
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(owners, null, 2));
  console.log("✅ owners.json updated");
}

main().catch((err) => {
  console.error("❌ Script failed:", err);
  process.exit(1);
});
