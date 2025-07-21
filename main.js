
async function checkWallet() {
    const wallet = document.getElementById("walletAddress").value;
    const results = document.getElementById("results");
    results.textContent = "Checking wallet: " + wallet + "\n";

    if (!wallet.startsWith("0x") || wallet.length !== 42) {
        results.textContent += "Invalid address format.";
        return;
    }

    const rpc = "https://rpc-testnet.monadinfra.com/";

    try {
        const balanceRes = await fetch(rpc, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                jsonrpc: "2.0",
                id: 1,
                method: "eth_getBalance",
                params: [wallet, "latest"]
            })
        });
        const balanceData = await balanceRes.json();
        const balance = parseInt(balanceData.result, 16) / 1e18;
        results.textContent += `Balance: ${balance.toFixed(4)} MONAD\n`;
    } catch (err) {
        results.textContent += "Failed to fetch balance.\n";
    }

    results.textContent += "\nNote: This is a front-end placeholder.\n";
    results.textContent += "Backend logic for SBT checks and tx analysis must be done via indexer or custom API.\n";
}
