# prud_Labs — Technical Overview

**One-page summary for partners and integrators.**

---

## Purpose

prud_Labs builds **encrypted on-chain execution** products that address MEV extraction, intent leakage, and public execution. Our hooks run on **Fhenix** (FHE) and **Uniswap v4**, enabling confidential auctions, dark-pool-style order books, and a unified router for encrypted flows.

## Core Mechanism

- **FHE (Fully Homomorphic Encryption):** All sensitive parameters (bids, prices, sizes, sides) remain encrypted on-chain. Matching and clearing use FHE operations (e.g. comparisons, min, select) so that intent is never revealed before settlement.
- **Uniswap v4 Hooks:** StealthAuction and ShadowBook are implemented as v4 hooks with the required hook callbacks (e.g. `beforeSwap`, pool lifecycle). They integrate with the PoolManager and use Fhenix’s CoFHE for FHE types (`euint64`, `euint128`, `ebool`, etc.).
- **Single integration point (ShadowRouter):** One API for wallets, custody providers, and aggregators to access StealthAuction, ShadowBook, and future encrypted hooks.

## The FHE Advantage

- **No pre-confirmation leakage:** Bids and orders are encrypted until clearing; MEV bots see no actionable data.
- **On-chain privacy:** No reliance on off-chain dark pools or trusted operators; confidentiality is enforced by the protocol.
- **Composability:** Built on Uniswap v4 and Fhenix, so hooks fit into existing DeFi flows and can be combined with other v4 hooks.

## Security Status

- **StealthAuction:** Slither static analysis clean; 200+ tests (unit + integration); 90–95% test coverage; gas-optimized (<300k gas per auction operation). *Audit report linked when published.*
- **ShadowBook:** FHE-based design; comprehensive unit, integration, fuzz, and invariant tests. *Audit planned.*
- **ShadowRouter:** In development; security and permission management will be audited before mainnet.

*Always verify contract addresses from official docs or repo before integrating.*

## Key Performance Metrics

| Product         | Test coverage | Gas (typical)     | Status    |
|-----------------|---------------|-------------------|-----------|
| StealthAuction  | 90–95%       | <300k per op      | Testnet   |
| ShadowBook      | Comprehensive| Optimized for prod| Testnet   |
| ShadowRouter    | TBD           | TBD               | Coming Soon |

## Next Steps for Integrators

1. Read the [Quick Start](./quickstart.md) for testnet addresses and a minimal integration example.
2. Review the [Security](./security.md) section for best practices and audit links.
3. Join [Discord](https://discord.gg/prudlabs) for technical support and partnership inquiries.

---

*Last updated: 2025. Contract addresses and audit links are subject to change; confirm via official channels.*
