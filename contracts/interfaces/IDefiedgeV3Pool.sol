// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity >=0.5.0;

import './pool/IDefiedgeV3PoolImmutables.sol';
import './pool/IDefiedgeV3PoolState.sol';
import './pool/IDefiedgeV3PoolDerivedState.sol';
import './pool/IDefiedgeV3PoolActions.sol';
import './pool/IDefiedgeV3PoolOwnerActions.sol';
import './pool/IDefiedgeV3PoolEvents.sol';

/// @title The interface for a Defiedge V3 Pool
/// @notice A Defiedge pool facilitates swapping and automated market making between any two assets that strictly conform
/// to the ERC20 specification
/// @dev The pool interface is broken up into many smaller pieces
interface IDefiedgeV3Pool is
    IDefiedgeV3PoolImmutables,
    IDefiedgeV3PoolState,
    IDefiedgeV3PoolDerivedState,
    IDefiedgeV3PoolActions,
    IDefiedgeV3PoolOwnerActions,
    IDefiedgeV3PoolEvents
{

}
