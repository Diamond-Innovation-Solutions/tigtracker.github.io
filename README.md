# tigtracker
Fee tracker for TigrisDEX/DAO

## Resources
Pairs contracts for fee pricing & open interest:

https://polygonscan.com/address/0x64c96ee480ab084d01dc682db0197a68c664d724

https://arbiscan.io/address/0x0e6E91221C46904563fAfDCc814fbF342BE8Ba20

## Primary Tasks
- It should sort the pairs on each network by the funding fee earning potential.
- Factors to include should be the total open interest on both longs and shorts on a pair, and the funding fee delta (oiSide1 - oiSide2)*baseFundingRate%.
- The last value in the tuple returned by idToAsset() is baseFundingRate, where 1e10 = 100%.
- idToOi() returns longOi, shortOi and maxOi of a pair, 1e18 precision.
