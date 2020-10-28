const { Validator } = require('@chainlink/external-adapter')
const { web3Operator } = require('./web3Operator')
const { drandOperator } = require('./drandOperator')
const { tezosOperator } = require('./tezosOperator')

const customParams = {}

const operate = async (input) => {

    const validator = new Validator(() => {}, input, customParams)
    const jobRunId = validator.validated.id

    const drand = await drandOperator()
    const vrf = await web3Operator(drand)
    await tezosOperator(vrf)      

    console.log(vrf.toString())
    return {
        "jobRunID": jobRunId,
        "data": vrf.toString() // returns transaction hash?
    }
}

module.exports.random_bridge_vrf = async (event, context) => {

    const response = {
        statusCode: 200,
        body: JSON.stringify(await operate(JSON.parse(event.body))),
        isBase64Encoded: false
    }

    return response // you can return an ethtx job
}
/* operate()
 */