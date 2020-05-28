---
id: rest-public-conf
title: "Configs"
subtitle: "Fetch currency and symbol site configuration data.   A variety of types of config data can be fetched by constructing a path with an Action, Object, and conditionally a Detail value.   Multiple sets of parameters may be passed, in a single request, to fetch multiple parts of the sites currency and symbol configuration data."
---

**Path parameters and constructing a valid config request path**
A valid config request path is built up from 1 to 3 path parameters, an Action value, an Object value, and a Detail value.

Use the information below to configure your request parameters and retrieve a variety of different configurations.

1. ** Request Prefix**
Every request must start with a _pub:_ prefix, e.g. **pub:**map:currency:sym

2. **Action Parameter**
Pick the high level action you would like to perform:

|🔽valid action values| notes | complete request
|:--|:--|:--|
| map | Map symbols to related details| -
| list | Fetch a list currencies, pairs, or leaderboard competitions| -
| info | Fetch detailed information about pairs or transactions| -
| fees | Fetch the derivatives fees configuration. Does not require an Object or Detail parameter| pub:fees

3. **Object Parameter**
Pick the object you would like to receive.
An action will only accept certain object values.
Refer to the table to see what objects can be used with what actions:

🔽action value|object == currency  |object == pair |object == tx
|--|:--:|:--:|:--:|
|map	|✔ |- | -|
|list	        |✔ |✔| -|
|info	        |-  |✔ |✔|

Next, determine if a Detail parameter needs to be supplied alongside the selected action and object type:

🔽action & object value (request) |is a detail parameter value required|notes|complete request
|--|:--:|:--|:--|
|map:currency	|✔ | Select a Detail value from the table below to use this request| -
|map:tx	|✔ | The only detail for tx is 'method' and will map all currencies to the appropriate withdrawal method for API withdrawals| pub:map:tx:method
|list:currency	|-  | Fetches a list of all currencies available on the platform: | pub:list:currency
|list:pair	        |✔ | Select a Detail value from the table below to use this request| -
|list:competitions	        |- | Fetches a list of leaderboard competitions| -
|info:pair	        |-  |  Fetches an array of market information for each currency (WIP) | pub:info:pair
|info:tx	        |✔|  The only detail for info:tx is 'detail' and it shows the whether the status of our wallets for deposits and withdrawals (Active = 1, Maintenance = 0) | pub:info:tx:detail

***If no Detail value is required then step 3 can be skipped.***

4. **Detail Parameter**
Pick the detail that will be contained in the object.
An object will only accept certain detail values.
Refer to the table to see what details can be used with what objects:

🔽detail value | object == currency | object == pair | notes | complete request
|--|:--:|:--:|:--|:--|
|exchange	|-  |✔ | Fetches a list of valid exchange trading pairs |pub:list:pair:exchange
|margin		|-  |✔ | Fetches a list of valid margin trading pairs |pub:list:pair:margin
|sym		|✔  |- | Maps symbols to their API symbols (e.g. BAB -> BCH) | pub:map:currency:sym
|label		|✔  |- | Maps symbols to their verbose friendly names (e.g. BNT -> Bancor) | pub:map:currency:label
|unit		        |✔  |- | Maps symbols to unit of measure (where applicable) | pub:map:currency:unit
|undl		|✔  |- | Maps derivatives symbols to their underlying currency | pub:map:currency:undl
|pool		|✔  |- | Maps symbols to underlying network/protocol they operate on | pub:map:curreny:pool
|explorer	        |✔  |- | Maps symbols to their recognised block explorer URLs | pub:map:currency:explorer


**Requesting multiple configurations**
Instead of performing a request for each configuration item it is possible to fetch multiple configurations in a single request.

Simpy append each request into a single string.
Comma separate each request, without any spaces.

Example of a multi-request that will fetch both margin and exchange trading pairs:
pub:list:pair:exchange,pub:list:pair:margin

**Response structure**
All valid permutations and their responses are available for viewing from the code snippet above.

**Ratelimit**: 15 req/min
