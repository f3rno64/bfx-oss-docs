---
id: rest-auth-withdrawal
title: "Withdrawal"
subtitle: "Allow you to request a withdrawal from one of your wallet."
---

::: callout info Note
For ALL withdrawals, you must supply the **Withdrawal Type**, the **Wallet** and the **Amount**. 

For CRYPTOCURRENCY withdrawals, you will also supply the **Address** where the funds should be sent. If it is a Monero transaction, you can also include a **Payment ID**. If it is an EOS transaction you can specify the **Memo** using the **Payment ID** field. 

For WIRE WITHDRAWALS, you will need to fill in the beneficiary bank information.

In some cases your bank will require the use of an intermediary bank, if this is the case, please supply those fields as well.

When submitting a Ripple Withdrawal via API, you should include `tag` in the `payment_id` field
:::


**Response Details**

Key | Type | Description
-- | -- | --
status  |  [string]  |  “success” or “error”.
message  |  [string]  |  Success or error message
withdrawal_id  |  [int]  |  ID of the withdrawal (0 if unsuccessful)

** Withdrawal Types **
"bitcoin", "litecoin", "ethereum", "ethereumc", "tetheruso", "tetheruse", "tetherusl", "tetherusx", "tetheruss", "wire", "zcash", "monero", "dash", "ripple", "iota", "eos", "santiment", "omisego", "bcash", "neo", "metaverse", "qtum", "aventus", "eidoo", "bgold", "datacoin", "qash", "yoyow", "golem", "status", "bat", "mna", "fun", "zrx", "tnb", "spk", "trx", "rcn", "rlc", "aid", "sng", "rep", "elf", "nec", "ios", "aio", "req", "rdn", "lrc", "wax", "dai", "cfi", "agi", "bft", "mtn", "ode", "ant", "dth", "mit", "stj", "xlm", "xvg", "bci", "mkr", "ven", "knc", "poa", "evt", "lym", "utk", "vee", "dad", "ors", "auc", "poy", "fsn", "cbt", "zcn", "sen", "nca", "cnd", "ctx", "pai", "see", "ess", "atd", "add", "mto", "atm", "hot", "dta", "iqx", "wpr", "zil", "bnt", "abs", "xra", "man", "xtz"

Notes on the Tether withdraw types:
Each Tether type represents a transport layer as follows:
"tetheruso" -> Tether on Omni
"tetheruse" -> Tether on ERC20
"tetherusl" -> Tether on Liquid
"tetherusx" -> Tether on Tron
"tetheruss" -> Tether on EOS
"tetherusdtalg" -> Tether on Algorand

For an up-to-date listing of supported currencies see: https://api.bitfinex.com/v2/conf/pub:map:currency:label
