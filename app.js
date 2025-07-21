
const express = require('express');
const cors = require('cors');
const { ethers } = require('ethers');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

// Monad RPC endpoint
const MONAD_RPC = "https://rpc-testnet.monadinfra.com/";
const provider = new ethers.providers.JsonRpcProvider(MONAD_RPC);

// ERC-721 ABI fragment
const ERC721_ABI = [
    "function balanceOf(address owner) view returns (uint256)"
];

// Contract addresses
const MILLION_NADS_SBT = "0x922da3512e2bebbe32bcce59adf7e6759fb8cea2";
const CYPHER_GAMES_SBT = "0x76d37bedcf864aa2bd848b7286f1be8d42f63cb6";

// Helper: fetch total tx count for address
async function getTransactionCount(address) {
    return await provider.getTransactionCount(address);
}

// Helper: check if wallet is "early" based on nonce or first tx block number
async function isEarlyUser(address) {
    const history = await provider.getHistory(address);
    if (history.length === 0) return false;
    const firstBlock = history[0].blockNumber;
    return firstBlock < 500000; // customize threshold if needed
}

// Helper: check SBT balance
async function checkSBT(contractAddress, wallet) {
    const contract = new ethers.Contract(contractAddress, ERC721_ABI, provider);
    const balance = await contract.balanceOf(wallet);
    return parseInt(balance.toString()) > 0;
}

app.get('/check/:wallet', async (req, res) => {
    const wallet = req.params.wallet.toLowerCase();
    try {
        const [balance, txCount, early, hasMillionNads, hasCypher] = await Promise.all([
            provider.getBalance(wallet),
            getTransactionCount(wallet),
            isEarlyUser(wallet),
            checkSBT(MILLION_NADS_SBT, wallet),
            checkSBT(CYPHER_GAMES_SBT, wallet)
        ]);

        res.json({
            address: wallet,
            balance: ethers.utils.formatEther(balance),
            transactions: txCount,
            isEarlyUser: early,
            hasMillionNadsSBT: hasMillionNads,
            hasCypherGamesSBT: hasCypher,
            gmonad: true
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
