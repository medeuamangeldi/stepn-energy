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

+ `**realm**`: "Solana" or "Binance". Other options will be added once the new realms will be introduced by stepn.com
+ `**sneakerType**`: "Walker", "Jogger", "Runner" or "Trainer".
+ `**sneakerRarity**`: "Common", "Uncommon", "Rare", "Epic", "Legendary"


