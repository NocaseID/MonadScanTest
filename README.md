
# Monad Wallet Checker

This is a simple front-end tool to check activity on the Monad testnet wallet, focused on SBT ownership and transaction history.

## ✅ Features

- Input Monad wallet address
- Connects to public Monad RPC endpoint
- Checks balance (MONAD)
- Placeholder hooks for SBT and transaction tracking

## 🛠 Requirements

- Static hosting (GitHub Pages or similar)
- Optional: Backend API for full SBT and activity tracking

## 🚀 Deploy on GitHub

1. Fork or create a new repo on GitHub.
2. Upload these files:
    - index.html
    - main.js
    - style.css
    - README.md
3. Commit and push.
4. Go to **Settings > Pages** and enable GitHub Pages from the main branch (`/root`).
5. Your tool will be live at: `https://<your-username>.github.io/<repo-name>/`

---

**SBT Contracts to integrate** (on Monad testnet):

- 1 Million NADs SBT: `0x922da3512e2bebbe32bcce59adf7e6759fb8cea2`
- Cypher Games SBT: `0x76d37bedcf864aa2bd848b7286f1be8d42f63cb6`

RPC: `https://rpc-testnet.monadinfra.com/`

---

## 🧠 Disclaimer

This is a front-end-only prototype. To detect contract interactions and SBT holdings, use a Monad indexer, logs, or custom smart contract query engine.
