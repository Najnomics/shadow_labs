# prud_Labs White Paper  
**Encrypted Execution for DeFi**

---

## Abstract

On-chain execution today is transparent by default. Order flow, auction bids, and trading intent are visible before confirmation, enabling MEV extraction, front-running, and strategy leakage. prud_Labs builds **encrypted execution** products on **Fhenix** (Fully Homomorphic Encryption) and **Uniswap v4** that keep sensitive data confidential until settlement. This document describes the problem, our approach, and the design of StealthAuction, ShadowBook, and ShadowRouter.

---

## 1. The Problem: Execution Is Broken

### 1.1 Transparency as a Bug

In traditional finance, large orders are executed via dark pools and block trades to avoid moving the market. In DeFi, almost everything is public: mempool, pending transactions, and on-chain state. That transparency creates a predictable attack surface:

- **MEV extraction:** Bots front-run, sandwich, and back-run user transactions. Token launches and large swaps routinely lose 15–40% of value to MEV.
- **Intent leakage:** The moment a user signs a transaction, their intent can be inferred. Copy traders and arbitrageurs react before confirmation.
- **Institutional friction:** Treasuries and funds cannot execute size on public DEXs without signaling and slippage. Liquidity fragments; adoption stalls.

The result: **execution is broken**. Users trade with their cards face up.

### 1.2 Why Existing Approaches Fall Short

- **Private mempools / MEV protection:** Reduce but do not eliminate leakage; order flow can still be inferred from settlement and state changes.
- **Off-chain dark pools:** Require trust in operators and introduce custody and composability limits.
- **Encryption only in transit:** Data is decrypted on-chain; once in state, it is visible.

What is needed is **confidentiality at the execution layer**: bids, orders, and prices that remain encrypted on-chain until clearing, with matching and settlement performed using cryptographic techniques that never reveal losing or unfilled information.

---

## 2. Our Approach: FHE on Uniswap v4

### 2.1 Fully Homomorphic Encryption (FHE)

FHE allows computation on **encrypted** data. Comparisons (e.g. “is bid A ≥ bid B?”), minima, and conditional selection can be implemented so that only the outcome of the computation is revealed (e.g. who won, or how much was filled), not the underlying inputs. Fhenix provides FHE in a form usable in Solidity (CoFHE): encrypted types such as `euint64`, `euint128`, and `ebool`, with gas-optimized homomorphic operations.

### 2.2 Uniswap v4 Hooks

Uniswap v4’s hook system lets custom logic run around pool lifecycle and swaps. prud_Labs uses hooks to:

- Attach encrypted auction and order-book logic to pools.
- Intercept swaps and lifecycle events to run FHE-based matching and settlement.
- Stay composable with the rest of the Uniswap v4 and Fhenix ecosystems.

### 2.3 Design Principles

- **Encryption by default:** Sensitive parameters (bids, prices, sizes, sides) are stored and processed in FHE form.
- **No pre-clearing leakage:** MEV bots and observers see no actionable information before settlement.
- **On-chain only:** No reliance on off-chain operators for correctness or privacy.
- **One integration surface:** ShadowRouter will offer a single API for all prud_Labs encrypted products.

---

## 3. Products

### 3.1 StealthAuction

**Goal:** Encrypted Dutch (or similar) auctions for token launches and other events, so that bids and clearing are confidential until settlement.

- **Mechanism:** Auction parameters (e.g. start price, reserve, decay) and bids are encrypted. The hook uses FHE to compare bids and compute clearing. Settlement is executed on-chain; only the outcome (e.g. winner, amount) is revealed.
- **Benefit:** Launch tokens without losing 15–40% to MEV; no bid sniping or strategy leakage.
- **Status:** Testnet; Slither clean; 200+ tests; audit report to be published.

### 3.2 ShadowBook

**Goal:** An encrypted limit-order book (dark pool style) where orders are matched on-chain without revealing resting order book state.

- **Mechanism:** Orders are submitted with encrypted price, amount, and side. Matching uses FHE operations (e.g. `gte`, `min`, `select`). Settlement goes through the PoolManager and encrypted transfers. Depth and queue are not publicly visible.
- **Benefit:** Trade with real size without signaling inventory; 50–80% slippage reduction on block-sized trades in simulations; privacy unlocks institutional flow.
- **Status:** Testnet; comprehensive tests; audit planned.

### 3.3 ShadowRouter

**Goal:** A unified router so that wallets, custody providers, and aggregators can access StealthAuction, ShadowBook, and future encrypted hooks through one integration.

- **Mechanism:** Single API and permission layer; router handles FHE permissions and hook routing. Integrators do not need to wire each hook separately.
- **Benefit:** Lower integration cost; consistent DX; future-proof for new prud_Labs products.
- **Status:** In development; documentation and testnet when ready.

---

## 4. Technical Highlights

- **Fhenix CoFHE:** Production-ready FHE in Solidity; Solidity-native encrypted types; gas-optimized operations; audited crypto.
- **Uniswap v4:** 4/4 essential hook permissions where needed; PoolManager integration; CREATE2 deployment; MEV-resistant design via encrypted handling.
- **Gas and correctness:** StealthAuction &lt;300k gas per auction operation; high test coverage; Slither clean for StealthAuction.
- **Composability:** Hooks are part of the Uniswap v4 and Fhenix ecosystems; they can be composed with other hooks and protocols.

---

## 5. Ecosystem and Roadmap

- **Fhenix:** We build on Fhenix’s FHE stack and align with its roadmap for CoFHE and ecosystem growth.
- **Uniswap v4:** We contribute encrypted execution primitives that complement the v4 hook ecosystem.
- **Roadmap (high level):** Testnet maturity for StealthAuction and ShadowBook → audit and mainnet → ShadowRouter testnet and mainnet → additional encrypted hooks and cross-chain considerations as the ecosystem evolves.

---

## 6. Risks and Limitations

- **FHE cost:** FHE is more expensive than plaintext; we optimize gas but recommend benchmarking for your use case.
- **New technology:** FHE in production DeFi is still maturing; we document known limitations and update as we learn.
- **Smart contract risk:** Audits reduce but do not eliminate risk; use at your own risk.

---

## 7. Conclusion

prud_Labs exists to fix execution: we provide **encrypted execution for DeFi** so that token launches, order flow, and large trades can be confidential until settlement. StealthAuction, ShadowBook, and ShadowRouter are the first steps. We are building in public, prioritizing security and documentation, and inviting builders and partners to integrate and extend this primitive.

---

## References and Links

- [Technical Overview](./technical-overview.md)
- [Quick Start](./quickstart.md)
- [Security](./security.md)
- Fhenix: [fhenix.io](https://fhenix.io)  
- Uniswap v4: [uniswap.org](https://uniswap.org)

*Document version: 1.0. Subject to updates; check the docs site for the latest.*
