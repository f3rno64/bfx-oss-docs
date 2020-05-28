---
id: rest-auth
title: "Authenticated Endpoints"
---

### Authentication

All examples assume the following:
1. You are using the provided example request object
2. You use your API key and secret
3. BTCUSD is the default symbol


```javascript [1590649447466001-javascript]
const request = require('request')
const crypto = require('crypto')

const apiKey = '<Your API key here>'
const apiSecret = '<Your API secret here>'
const baseUrl = 'https://api.bitfinex.com'

const url = '/v1/account_infos'
const nonce = Date.now().toString()
const completeURL = baseUrl + url
const body = {
  request: url,
  nonce
}
const payload = new Buffer(JSON.stringify(body))
	.toString('base64')

const signature = crypto
  .createHmac('sha384', apiSecret)
  .update(payload)
  .digest('hex')

const options = {
  url: completeURL,
  headers: {
    'X-BFX-APIKEY': apiKey,
    'X-BFX-PAYLOAD': payload,
    'X-BFX-SIGNATURE': signature
  },
  body: JSON.stringify(body)
}

return request.post(
  options,
  function(error, response, body) {
    console.log('response:', JSON.stringify(body, 0, 2))
  }
)
```

```go [1590649447466001-go]
payload := map[string]interface{}{
	"request": "/v1/account_infos",
	"nonce":   fmt.Sprintf("%v", time.Now().Unix()*10000),
}
    
import "github.com/bitfinexcom/bitfinex-api-go"

client := bitfinex.NewClient().Auth(API_KEY, API_SECRET)

// Full example of authenticated request
package main

import (
	"crypto/hmac"
	"crypto/sha512"
	"encoding/base64"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"time"
)

func main() {
	API_KEY := "..."
	API_SECRET := "..."

	url := "https://api.bitfinex.com/v1/"
	req, err := http.NewRequest("POST", url+"/account_infos", nil)
	if err != nil {
		log.Fatal(err)
	}

	payload := map[string]interface{}{
		"request": "/v1/account_infos",
		"nonce":   fmt.Sprintf("%v", time.Now().Unix()*10000),
	}

	payload_json, _ := json.Marshal(payload)
	payload_enc := base64.StdEncoding.EncodeToString(payload_json)

	sig := hmac.New(sha512.New384, []byte(API_SECRET))
	sig.Write([]byte(payload_enc))

	req.Header.Add("Content-Type", "application/json")
	req.Header.Add("Accept", "application/json")
	req.Header.Add("X-BFX-APIKEY", API_KEY)
	req.Header.Add("X-BFX-PAYLOAD", payload_enc)
	req.Header.Add("X-BFX-SIGNATURE", hex.EncodeToString(sig.Sum(nil)))

	resp, err := http.DefaultClient.Do(req)
	if err != nil {
		log.Fatal(err)
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(string(body))
}

```

```ruby [1590649447466001-ruby]
# add in your Gemfile
gem 'bitfinex-rb'

Bitfinex::Client.configure do |conf|
  conf.secret = ENV["BFX_API_SECRET"]
  conf.api_key = ENV["BFX_API_KEY"]
end

client = Bitfinex::Client.new
```

```java [1590649447466001-java]
package eg.android.example;

import android.util.Base64;
import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedInputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

public class Examples {

    private static final String TAG = Examples.class.getSimpleName();

    private static final String ALGORITHM_HMACSHA384 = "HmacSHA384";

    private String apiKey = "";
    private String apiKeySecret = "";
    private long nonce = System.currentTimeMillis();

    /**
     * public access only
     */
    public Examples() {
        apiKey = null;
        apiKeySecret = null;
    }

    /**
     * public and authenticated access
     *
     * @param apiKey
     * @param apiKeySecret
     */
    public Examples(String apiKey, String apiKeySecret) {
        this.apiKey = apiKey;
        this.apiKeySecret = apiKeySecret;
    }

    /**
     * Creates an authenticated request WITHOUT request parameters. Send a request for Balances.
     *
     * @return Response string if request successfull
     * @throws IOException
     */
    public String sendRequestV1Balances() throws IOException {
        String sResponse;

        HttpURLConnection conn = null;

        String urlPath = "/v1/balances";
        // String method = "GET";
        String method = "POST";

        try {
            URL url = new URL("https://api.bitfinex.com" + urlPath);
            conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod(method);

            if (isAccessPublicOnly()) {
                String msg = "Authenticated access not possible, because key and secret was not initialized: use right constructor.";
                Log.e(TAG, msg);
                return msg;
            }

            conn.setDoOutput(true);
            conn.setDoInput(true);

            JSONObject jo = new JSONObject();
            jo.put("request", urlPath);
            jo.put("nonce", Long.toString(getNonce()));

            // API v1
            String payload = jo.toString();

			// this is usage for Base64 Implementation in Android. For pure java you can use java.util.Base64.Encoder
          // Base64.NO_WRAP: Base64-string have to be as one line string
            String payload_base64 = Base64.encodeToString(payload.getBytes(), Base64.NO_WRAP);

			
            String payload_sha384hmac = hmacDigest(payload_base64, apiKeySecret, ALGORITHM_HMACSHA384);

           conn.setRequestProperty("Content-Type", "application/json");
            conn.setRequestProperty("Accept", "application/json");
            conn.addRequestProperty("X-BFX-APIKEY", apiKey);
            conn.addRequestProperty("X-BFX-PAYLOAD", payload_base64);
            conn.addRequestProperty("X-BFX-SIGNATURE", payload_sha384hmac);

            // read the response
            InputStream in = new BufferedInputStream(conn.getInputStream());
            return convertStreamToString(in);

        } catch (MalformedURLException e) {
            throw new IOException(e.getClass().getName(), e);
        } catch (ProtocolException e) {
            throw new IOException(e.getClass().getName(), e);
        } catch (IOException e) {

            String errMsg = e.getLocalizedMessage();

            if (conn != null) {
                try {
                    sResponse = convertStreamToString(conn.getErrorStream());
                    errMsg += " -> " + sResponse;
                    Log.e(TAG, errMsg, e);
                    return sResponse;
                } catch (IOException e1) {
                    errMsg += " Error on reading error-stream. -> " + e1.getLocalizedMessage();
                    Log.e(TAG, errMsg, e);
                    throw new IOException(e.getClass().getName(), e1);
                }
            } else {
                throw new IOException(e.getClass().getName(), e);
            }
        } catch (JSONException e) {
            String msg = "Error on setting up the connection to server";
            throw new IOException(msg, e);
        } finally {
            if (conn != null) {
                conn.disconnect();
            }
        }
    }

    private String convertStreamToString(InputStream is) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
        StringBuilder sb = new StringBuilder();

        String line;
        try {
            while ((line = reader.readLine()) != null) {
                sb.append(line).append('\n');
            }
        } finally {
            try {
                is.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return sb.toString();
    }

    public long getNonce() {
        return ++nonce;
    }

    public boolean isAccessPublicOnly() {
        return apiKey == null;
    }

    public static String hmacDigest(String msg, String keyString, String algo) {
        String digest = null;
        try {
            SecretKeySpec key = new SecretKeySpec((keyString).getBytes("UTF-8"), algo);
            Mac mac = Mac.getInstance(algo);
            mac.init(key);

            byte[] bytes = mac.doFinal(msg.getBytes("ASCII"));

            StringBuffer hash = new StringBuffer();
            for (int i = 0; i < bytes.length; i++) {
                String hex = Integer.toHexString(0xFF & bytes[i]);
                if (hex.length() == 1) {
                    hash.append('0');
                }
                hash.append(hex);
            }
            digest = hash.toString();
        } catch (UnsupportedEncodingException e) {
            Log.e(TAG, "Exception: " + e.getMessage());
        } catch (InvalidKeyException e) {
            Log.e(TAG, "Exception: " + e.getMessage());
        } catch (NoSuchAlgorithmException e) {
            Log.e(TAG, "Exception: " + e.getMessage());
        }
        return digest;
    }
}


```

Authentication is done using an API key and a secret. To generate this pair, go to the <a href="https://www.bitfinex.com/api" target="_blank">API Access</a> page.

As an example of how to authenticate, we can look at the "account_infos" endpoint.
Take the example payload above.


::: callout danger Nonce
The nonce provided must be strictly increasing.
:::


The authentication procedure is as follows:

* The payload is the parameters object, first JSON encoded, and then encoded into Base64

`payload = parameters-object -> JSON encode -> base64`

* The signature is the hex digest of an HMAC-SHA384 hash where the message is your payload, and the secret key is your API secret.

`signature = HMAC-SHA384(payload, api-secret).digest('hex')`

`send (api-key, payload, signature)`

These are encoded as HTTP headers named:

* X-BFX-APIKEY
* X-BFX-PAYLOAD
* X-BFX-SIGNATURE



::: callout info undefined
All Authenticated Endpoints use POST requests
:::


- POST [Account Info](/v1/reference#rest-auth-account-info)
- POST [Summary](/v1/reference#rest-auth-summary)
- POST [Deposit](/v1/reference#rest-auth-deposit)
- POST [Wallet Balances](/v1/reference#rest-auth-wallet-balances)
- POST [Margin Information](/v1/reference#rest-auth-margin-information)
- POST [Transfer Between Wallets](/v1/reference#rest-auth-transfer-between-wallets)
- POST [Withdrawal](/v1/reference#rest-auth-withdrawal)
- POST [Key Permissions](/v1/reference#rest-auth-key-permissions)

** Orders **

- POST [New Order](/v1/reference#rest-auth-new-order)
- POST [Multiple new orders](/v1/reference#rest-auth-multiple-new-orders)
- POST [Cancel order](/v1/reference#rest-auth-cancel-order)
- POST [Cancel multiple orders](/v1/reference#rest-auth-cancel-multiple-orders)
- POST [Cancel all orders](/v1/reference#rest-auth-cancel-all-orders)
- POST [Replace order](/v1/reference#rest-auth-replace-order)
- POST [Order status](/v1/reference#rest-auth-order-status)
- POST [Active orders](/v1/reference#rest-auth-active-orders)
- POST [Basket Manage](/v1/reference/#rest-auth-balance-manage)

** Positions **

- POST [Active Positions](/v1/reference#rest-auth-active-positions)
- POST [Claim Position](/v1/reference#rest-auth-claim-position)

** Historical Data **

- POST [Balance History](/v1/reference#rest-auth-balance-history)
- POST [Deposit-Withdrawal History](/v1/reference#rest-auth-deposit-withdrawal-history)
- POST [Past Trades](/v1/reference#rest-auth-past-trades)

** Margin Funding **

- POST [New Offer](/v1/reference#rest-auth-new-offer)
- POST [Cancel Offer](/v1/reference#rest-auth-cancel-offer)
- POST [Offer Status](/v1/reference#rest-auth-offer-status)
- POST [Active Credits](/v1/reference#rest-auth-active-credits)
- POST [Offers](/v1/reference#rest-auth-offers)
- POST [Active funding used in a margin position](/v1/reference#rest-auth-active-funding)
- POST [Active funding not used in a margin position](/v1/reference#rest-auth-active-funding-not-used-in-a-margin)
- POST [Total taken funds](/v1/reference#rest-auth-total-taken-funds)
- POST [Close margin funding](/v1/reference#rest-auth-close-margin-funding)
