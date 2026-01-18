---
sidebar_position: 2
title: How it works
---

## Locking a position

PermaLock is an ERC721 receiver. To lock a position, transfer a Uniswap V3 or
V4 position NFT to the PermaLock contract with encoded data:

- `feeRecipient`: who receives trading fees
- `expiry`: unix timestamp (0 means permanent)

Time locks must be at least one week. Permanent locks never unlock.

## Fee claims

Fees are collected from the position manager and routed to the fee recipient.
The protocol takes a fee (default 1 percent, capped at 5 percent) on claimed
fees.

- Permanent locks: only the fee recipient can claim.
- Time-locked positions: the owner or fee recipient can claim.

## Withdrawals

Time-locked positions can be withdrawn by the owner after expiry. Withdrawals
claim any pending fees first and then return the NFT to the owner. Permanent
locks can never be withdrawn.

## Ownership and fee recipient

Ownership transfer is a two-step process: propose a new owner, then accept. The
owner can change the fee recipient at any time.

## Admin controls

The admin can:

- Pause deposits (claims and withdrawals always remain available)
- Adjust the protocol fee rate (capped)
- Withdraw protocol fees
- Rescue tokens sent by mistake

## Supported position managers

PermaLock supports both Uniswap V3 and V4 position managers through a unified
interface. Hooks are not required for fee collection.
