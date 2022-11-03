import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
;(async () => {
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

  const { baseFundingRate } = await contract.methods
    .idToAsset('0')
    .call()

  const { longOi, shortOi } = await contract.methods
    .idToOi('0', '0x7e491f53bf807f836e2dd6c4a4fbd193e1913efd')
    .call()
  console.log(`base interest: ${baseFundingRate / 1e10}`)
  console.log(`longOi ${longOi / 1e18}`)
  console.log(`shortOi ${shortOi / 1e18}`)

  console.log(
    `FUNDING(L): ${((longOi / 1e18) * baseFundingRate) / 1e10}%\nFUNDING(S): ${
      ((shortOi / 1e18) * baseFundingRate) / 1e10
    }%`
  )
})()
