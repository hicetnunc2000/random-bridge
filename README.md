# random-bridge


random-bridge is an external adapter which brides Chainlink VRF into Tezos Smart Contracts.

it was built using serverless framework, client libraries such as web3.js and conseil.js, cloud providers as infura and nautilus cloud.

carthagenet vrf sample KT1NH3FkrYZhM93BJtSSLfYwPKcqpiyjgVmE
kovan vrf sample 0xa267a7bc091af818fff5c792a8f23766af21946d

.env
```
# tezos env carthagenet

TEZOS_NODE=
CONSEIL_SERVER=
API_KEY=
KT_ADDRESS=
NETWORK=
SECRET_KEY=
LAMBDA=true

# eth env kovan

VRF_SOL_ADDRESS=
DRAND_SOL_ADDRESS=
ETHEREUM_PRIVATE_KEY=
INFURA_NODE=
```

```
MIT License
```

