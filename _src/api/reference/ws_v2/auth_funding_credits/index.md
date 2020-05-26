---
id: ws-auth-funding-credits
dataSamples:
  snapshot_format.json: Snapshot (`fcs`)
  snapshot_example.json: Update (`fcn`, `fcu`, `fcc`)
---

# Funding Credits

Receive a snapshot and updates for any funding credits (funds used in active
positions) on your account.

Subscribe to the account information channel to keep track of your funding
credits. The account information channel provides a snapshot and updates on the
funding credits in your account. The snapshot is delivered upon subscribing and
any changes to your funding credits will be provided as updates for as long as
the channel remains open. Any authenticated connection is automatically
subscribed to the account information channel.

Example code to open an authenticated connection can be found on our
[Authenticated Channels Page](/api/guides/ws-auth-channels)

Funding credits events are sent with `CHAN_ID = 0` and can be identified by
looking at the TYPE stream field. Funding credits events willuse one of the
following abbreviations: 'fcs' (funding credits snapshot), 'fcn'(funding
credits new), 'fcu' (funding credits update), 'fcc' (funding creditsclose).
