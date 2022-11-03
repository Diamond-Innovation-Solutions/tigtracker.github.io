import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import Pairs from './pairs.json'
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

    const web3 = new Web3('https://arb1.arbitrum.io/rpc')

    const contract = new web3.eth.Contract(
      abi,
      '0x0e6E91221C46904563fAfDCc814fbF342BE8Ba20'
    )

    console.log(`${''.padStart(39,'#')}\n#   ASSET   # FUNDING(L) # FUNDING(S) #\n${''.padStart(39,'#')}`)

    for (const pair in Pairs) {

      //@ts-ignore
      const val = Pairs[pair]

      const { baseFundingRate } = await contract.methods.idToAsset(val).call()

      const { longOi, shortOi } = await contract.methods
        .idToOi(val, '0x7e491f53bf807f836e2dd6c4a4fbd193e1913efd')
        .call()

      const fundingL = longOi  / 1e18 * baseFundingRate / 1e10
      const fundingS = shortOi / 1e18 * baseFundingRate / 1e10

      console.log(
        `# ${pair.padEnd(9)} # ${(fundingL.toString()+'%').padEnd(10) } # ${(fundingS.toString()+'%').padEnd(11)}#`
      )
    }
  })()
