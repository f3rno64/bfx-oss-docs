---
id: ws-auth-margin-info
title: Margin Info
subtitle: Receive margin info updates for your account.
dataSamples:
  json_update_miu_template.json: Update ('miu') template
  json_update_miu_template.json: Update ('miu') template
  json_update_miu_template.json: Update ('miu') template
  json_update_miu_sample.json: Update ('miu') sample
---

Subscribe to the account information channel to keep track of your margin info. The account information channel will provide a feed of your margin info for as long as the channel remains open. Any authenticated connection is automatically subscribed to the account information channel.

Example code to open an authenticated connection can be found on our [Authenticated Channels Page](doc:ws-auth).

Margin info events are sent with CHAN_ID = 0 and can be identified by looking at the TYPE stream field. Margin info events can be recognised by the 'miu' (margin info update) abbreviation.


**Stream Fields**

Term | Type | Description
-- | -- | --
CHAN_ID | int | Identification number for the channel subscribtion. Margin info events are always sent through the account information channel with CHAN_ID = 0
TYPE | string | 'miu' (margin info update)
USER_PL |  float  |  User Profit and Loss
USER_SWAPS |  float  |  Amount of swaps a user has
SYMBOL | string  |  The symbol the information pertains to
TRADABLE_BALANCE |  float  |  Your buying power (how large a position you can obtain)
MARGIN_BALANCE |  float  |  Balance in your margin funding account
MARGIN_NET |  float  |  Balance after P&L is accounted for
MARGIN_REQUIRED |  float  |  Minimum required margin to keep positions open


::: callout info NOTE
These messages have gained the ability to send the calculation values equal to "null" meaning that the new calculated value is not yet available.
In order to receive those values the user have to actively request for it with a "calc" message.
See calc input dedicated section for more details.
:::
