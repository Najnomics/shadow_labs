# Security — prud_Labs

Security is central to prud_Labs. This page summarizes our security posture, audit status, and best practices for integrators.

---

## Security Philosophy

- **Encryption by default:** Sensitive data (bids, orders, prices, sizes) stays encrypted on-chain using FHE until settlement.
- **Minimal trust:** Hooks are permissionless and composable; security does not rely on off-chain operators or centralized dark pools.
- **Transparency:** We publish audit reports (when available), document limitations, and maintain clear upgrade and governance expectations.

---

## Audit Status

| Product         | Status        | Notes |
|-----------------|---------------|--------|
| StealthAuction  | Slither clean | 200+ tests; 90–95% coverage. Full audit report will be linked when published. |
| ShadowBook      | In progress   | Comprehensive test suite; audit planned. |
| ShadowRouter    | Not yet       | Audit planned before mainnet. |

*Check this page and official channels for the latest audit links and dates.*

---

## Security Architecture (High Level)

1. **FHE (Fhenix CoFHE):** All confidential state uses Fhenix’s CoFHE infrastructure: Solidity-native encrypted types, gas-optimized homomorphic operations, and audited crypto primitives.
2. **Hook permissions:** Hooks use only the Uniswap v4 permissions they need (e.g. 4/4 essential for StealthAuction). No unnecessary privileges.
3. **Access control:** FHE permissions and role-based access (e.g. FHEPermissions.sol) restrict who can decrypt or perform sensitive operations where applicable.
4. **No hidden oracles:** Clearing and matching use only on-chain, encrypted data and FHE operations; no reliance on off-chain oracles for core correctness.

---

## Best Practices for Integrators

1. **Verify addresses:** Always take contract addresses from our official documentation or GitHub. Do not use addresses from untrusted chats or third-party articles.
2. **FHE permissions:** Understand and correctly request Fhenix FHE permissions for your integration; missing or wrong permissions will cause reverts or undefined behavior.
3. **Testnet first:** Run full flows on testnet before mainnet; test edge cases (failed bids, cancellations, partial fills where applicable).
4. **Error handling:** Handle hook reverts and FHE-related errors in your UI and backend; surface clear messages to users where possible.
5. **Monitoring:** Monitor for upgrades or parameter changes announced via official channels; stay on supported contract versions.

---

## Bug Bounty

*(To be announced. When active, we will link the program and scope here.)*

We encourage responsible disclosure. If you believe you’ve found a vulnerability, please contact us through a secure channel (e.g. email or Discord DM to the core team) and do not exploit it on mainnet.

---

## Limitations and Risks

- **FHE performance:** FHE operations have higher gas cost than plaintext; we optimize where possible but recommend benchmarking for your use case.
- **New technology:** FHE in production DeFi is evolving; we document known limitations and will update this page as we learn more.
- **Smart contract risk:** All on-chain code carries risk; audits reduce but do not eliminate it. Use at your own risk and only with amounts you can afford to lose.

---

## Links

- [Technical Overview](./technical-overview.md)
- [Quick Start](./quickstart.md)
- [White Paper](./whitepaper.md)
