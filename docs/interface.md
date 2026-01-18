---
sidebar_position: 3
title: Contract interface
---

This is an abridged view of the PermaLock public interface, focused on external
functions and public getters.

## Types

```solidity
enum PoolVersion { V3, V4 }

struct Lock {
    address owner;
    address feeRecipient;
    uint40 expiry;
    uint40 lockedAt;
    PoolVersion version;
    address positionManager;
    uint256 nftTokenId;
    address token0;
    address token1;
    uint24 fee;
    int24 tickLower;
    int24 tickUpper;
    uint128 liquidity;
    uint256 feeGrowthInside0LastX128;
    uint256 feeGrowthInside1LastX128;
}
```

## ERC721 deposit

```solidity
function supportsInterface(bytes4 interfaceId) external pure returns (bool);

function onERC721Received(
    address operator,
    address from,
    uint256 tokenId,
    bytes calldata data
) external returns (bytes4);
```

## Core actions

```solidity
function claimFees(uint256 lockId) external returns (uint256 amount0, uint256 amount1);
function claimFeesBatch(uint256[] calldata lockIds) external;
function multicall(bytes[] calldata data) external returns (bytes[] memory results);
function withdrawPosition(uint256 lockId) external;
function extendLock(uint256 lockId, uint40 newExpiry) external;
function makePermanent(uint256 lockId) external;
```

## Ownership and fee recipient

```solidity
function proposeOwnershipTransfer(uint256 lockId, address newOwner) external;
function acceptOwnershipTransfer(uint256 lockId) external;
function cancelOwnershipTransfer(uint256 lockId) external;
function changeFeeRecipient(uint256 lockId, address newRecipient) external;
```

## Views and getters

Public state getters:

```solidity
function locks(uint256 lockId) external view returns (Lock memory);
function totalLocks() external view returns (uint256);
function lockIdToTokenId(uint256 lockId) external view returns (uint256);
function tokenIdToLockId(address pm, uint256 tokenId) external view returns (uint256);
function pendingOwnerTransfer(uint256 lockId) external view returns (address);
function protocolFeesAccrued(address token) external view returns (uint256);
function protocolFeeRate() external view returns (uint256);
function admin() external view returns (address);
function depositsPaused() external view returns (bool);
function v3PositionManager() external view returns (address);
function v4PositionManager() external view returns (address);
```

View helpers:

```solidity
function getLockWithFees(uint256 lockId)
    external
    view
    returns (Lock memory lock, uint256 pendingFee0, uint256 pendingFee1);

function getLocksPaginated(uint256 offset, uint256 limit)
    external
    view
    returns (Lock[] memory lockArray, uint256[] memory lockIds, uint256 total);

function getOwnerLocks(address owner, uint256 offset, uint256 limit)
    external
    view
    returns (Lock[] memory lockArray, uint256[] memory lockIds, uint256 total);

function getPendingFeesBatch(uint256[] calldata lockIds)
    external
    view
    returns (uint256[] memory pending0, uint256[] memory pending1);

function getProtocolStats() external view returns (uint256, uint256, bool);
```

## Admin actions

```solidity
function withdrawProtocolFees(address token, address to) external;
function setProtocolFeeRate(uint256 newRate) external;
function setAdmin(address newAdmin) external;
function pauseDeposits() external;
function unpauseDeposits() external;
function rescueERC20(address token, uint256 amount, address to) external;
function rescueETH(uint256 amount, address to) external;
```
