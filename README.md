# Getting Started with StepN Energy

## Requesting Data from API (public and free to use).
------
##### Get the list of all walking/running records from STEPN users.
------
GET: `https://stepn.energy/api/getAllRuns`

##### Get the list of all minting scroll drop records from STEPN users.
------
GET: `https://stepn.energy/api/getAllScrolls`

##### Get the last price data on GST, GMT, SOL, BNB.
------
GET: `https://stepn.energy/api/getLastPrice`

##### Add result of your walking/running session
------
POST: `https://stepn.energy/api/postRun`

Raw body example: 

```json
{
    "realm": "Solana"
    "sneakerType": "Jogger",
    "sneakerRarity": "Uncommon",
    "sneakerLevel": 25,
    "gstEarned": 111.26,
    "energySpent": 11.8,
    "durability": 14,
    "eff": 159,
    "res": 24.7,
    "luck": 16.2,
    "misteryBox": true,
    "misteryBoxLevel": 10
}
```
Options:

+ `realm`: [String] "Solana" or "Binance". Other options will be added once the new realms will be introduced by stepn.com
+ `sneakerType`: [String] "Walker", "Jogger", "Runner" or "Trainer"
+ `sneakerRarity`: [String] "Common", "Uncommon", "Rare", "Epic", or "Legendary"
+ `sneakerLevel`: [Number] 0-30
+ `gstEarned`: [Number] Minimum 0.1
+ `energySpent`: [Number] Minimum 0.2
+ `durability`: [Number] Minimum 1
+ `eff`: [Number] Minimum 1
+ `res`: [Number] Minimum 1
+ `luck`: [Number] Minimum 1
+ `misteryBox`: [Boolean] `true` or `false`
+ `misteryBoxLevel`: [Number] if `misteryBox: true`, use the integer from 1 to 10. Otherwise, use `null`.

##### Add result of minting scroll drop
------
POST: `https://stepn.energy/api/postScroll`

Raw body example: 

```json
{
    "OpenedMisteryBoxLevel": 2,
    "ScrollDropped": true,
    "ScrollRarity": "Common"
}
```
Options:

+ `OpenedMisteryBoxLevel`: [Number] 1-10
+ `ScrollDropped`: [Boolean] `true` or `false`
+ `ScrollRarity`: [String] if `ScrollDropped: true`, use "Common", "Uncommon", "Rare", "Epic", or "Legendary". Otherwise, `null`.


