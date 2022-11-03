import Web3 from 'web3'
import { AbiItem, } from 'web3-utils'
import Contract from './contract'


  ; (async () => {
    const abi = JSON.parse(
      (
        await (
          await fetch(
            'https://api.arbiscan.io/api?module=contract&action=getabi&address=0x0e6E91221C46904563fAfDCc814fbF342BE8Ba20'
          )
        ).json()
      ).result
    ) as AbiItem[]

    const web3 = new Web3('wss://rinkeby-light.eth.linkpool.io/ws')


    console.log(JSON.stringify(abi,null,4))

    const contract = new web3.eth.Contract(
      abi,
      '0x0e6E91221C46904563fAfDCc814fbF342BE8Ba20'
    ) as Contract

    

    contract.events.AssetAdded((error, event)=>{
      if(error)
        console.log(`error: ${error}`)
        return
      console.log(`event: ${event}`)
    })

  })()
