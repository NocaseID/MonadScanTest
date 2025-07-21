
# Monad Wallet Checker Backend

This Node.js backend checks the following for any Monad Testnet wallet:

- Total wallet balance
- Total transaction count
- Early user status (based on first tx block)
- Whether wallet holds:
  - Million NADs SBT
  - Cypher Games SBT

## 🛠 Setup

```bash
git clone https://github.com/your-username/monad-wallet-backend.git
cd monad-wallet-backend
npm install
npm start
```

## 📡 API Endpoint

**GET /check/:wallet**  
Example: `/check/0xabc123...`

Returns:
```json
{
  "address": "0x...",
  "balance": "0.0283",
  "transactions": 32,
  "isEarlyUser": true,
  "hasMillionNadsSBT": true,
  "hasCypherGamesSBT": false,
  "gmonad": true
}
```

## 🚀 Deploy on Render.com (Free Tier)

1. Go to https://render.com/
2. Create new Web Service
3. Connect GitHub repo
4. Set Build Command: `npm install`
5. Set Start Command: `npm start`
6. Environment: Node 18+

## 🧠 Notes
- Make sure to keep RPC and ABI consistent with Monad Testnet.
- Works well with the front-end repo you already deployed on GitHub.
