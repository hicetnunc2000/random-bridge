# random-bridge


random-bridge is an external adapter which brides [Chainlink VRF](https://blog.chain.link/chainlink-vrf-now-live-on-ethereum-mainnet/) into Tezos Smart Contracts. v0.1.0 distribute randomness as in an input flux. other fluxes are being designed.

it was built using serverless framework, client libraries such as [web3.js](https://web3js.readthedocs.io/en/v1.3.0/) and [conseil.js](https://cryptonomic.github.io/ConseilJS/#/), cloud providers as [infura](https://infura.io/docs) and [nautilus cloud](https://nautilus.cloud/).

kovan vrf sample 0xa267a7bc091af818fff5c792a8f23766af21946d<br />
carthagenet vrf sample KT1NH3FkrYZhM93BJtSSLfYwPKcqpiyjgVmE

.env
```
# eth env kovan

VRF_SOL_ADDRESS=
DRAND_SOL_ADDRESS=
ETHEREUM_PRIVATE_KEY=
INFURA_NODE=

# tezos env carthagenet

TEZOS_NODE=
CONSEIL_SERVER=
API_KEY=
KT_ADDRESS=
NETWORK=
SECRET_KEY=

LAMBDA=true
```

```
MIT License
```

