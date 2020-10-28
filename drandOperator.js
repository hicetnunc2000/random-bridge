const axios = require('axios')
const bigInt = require('big-integer')

const drandOperator = async () => {

    return await axios.get('https://api.drand.sh/public/latest')
        .then(res => bigInt(res.data.randomness, 16).toString())

}

module.exports = { drandOperator }