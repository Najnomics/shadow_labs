# Quick Start — Integrating prud_Labs Hooks

This guide walks you through the minimum steps to interact with prud_Labs products on **testnet**. Replace placeholder addresses with the canonical ones from our repo or docs before going to mainnet.

---

## Prerequisites

- Familiarity with Uniswap v4 hook interfaces and the PoolManager.
- Access to Fhenix testnet (for FHE permissions and CoFHE).
- A wallet and testnet tokens as needed for your flow.

---

## StealthAuction

**Purpose:** Run encrypted Dutch auctions (e.g. token launches) without MEV leakage.

### 1. Contract addresses (testnet)

*(Replace with actual deployed addresses from the official repo or docs.)*

```
StealthAuction Hook:  0x...
StealthAuctionToken:  0x...
```

### 2. Core flow

1. **Create a pool** with the StealthAuction hook attached (via PoolManager + hook configuration).
2. **Set auction parameters** (start price, reserve, decay) — these can be encrypted (FHE) where supported.
3. **Submit bids** through the hook; bids are stored and processed in encrypted form.
4. **Clearing** uses FHE comparisons; winning bid(s) and settlement are executed on-chain without revealing losing bids.

### 3. Key interface (conceptual)

```solidity
// Pseudocode – refer to actual IStealthAuction or hook interface in repo
function placeBid(uint256 auctionId, bytes calldata encryptedBid) external;
function getAuctionStatus(uint256 auctionId) external view returns (...);
```

### 4. FHE permissions

Ensure your integrator (or end-user) address has the required Fhenix CoFHE permissions for the hook. See Fhenix docs for requesting and managing FHE permissions.

---

## ShadowBook

**Purpose:** Encrypted limit-order book; submit and match orders without revealing size or price to the public.

### 1. Contract addresses (testnet)

*(Replace with actual deployed addresses.)*

```
ShadowBookHook:  0x...
```

### 2. Core flow

1. **Submit encrypted orders** (price, amount, side) via the hook; orders use FHE types (e.g. `euint64`).
2. **Matching** runs on-chain using FHE operations (`gte`, `min`, `select`); no decryption of resting orders.
3. **Settlement** uses the PoolManager and encrypted FHERC20-style transfers where applicable.

### 3. Key interface (conceptual)

```solidity
// Pseudocode – refer to IShadowBookHook in repo
function submitOrder(bytes calldata encryptedOrderParams) external;
function cancelOrder(uint256 orderId) external;
```

### 4. Integration point

The hook plugs into Uniswap v4’s swap flow (e.g. `beforeSwap`); matching can occur when swaps interact with the pool. See architecture docs for exact integration points.

---

## ShadowRouter (coming soon)

ShadowRouter will expose a **unified API** for:

- Routing to StealthAuction auctions.
- Routing to ShadowBook order submission and matching.
- Future prud_Labs encrypted hooks.

Integrate once and access all encrypted execution surfaces with a single interface. Documentation and testnet addresses will be published when the router is ready.

---

## Minimal integration checklist

- [ ] Obtain testnet contract addresses from official docs or GitHub.
- [ ] Configure Fhenix FHE permissions for your integration/EOA.
- [ ] Run a test flow on testnet (e.g. place one bid on StealthAuction or one order on ShadowBook).
- [ ] Handle hook revert reasons and FHE permission errors in your UX.
- [ ] Before mainnet: verify addresses again and check for the latest audit reports.

---

## Support

- **Documentation:** You’re here — use the [Technical Overview](./technical-overview.md) and [Security](./security.md) docs next.
- **Community:** [Discord](https://discord.gg/prudlabs) for technical support and partnership questions.
- **Code:** GitHub repository *(link to be added)* for full interfaces and deployment scripts.
