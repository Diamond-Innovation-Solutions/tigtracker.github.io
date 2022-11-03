import { Contract as EthContract } from "web3-eth-contract"

type address = string

export default interface Contract extends EthContract {
  events:{
    AssetAdded: (callback:(error:Error|null,events:any)=>void)=>void
    OwnershipTransfered: (callback:(error:Error|null,events:any)=>void)=>void 
    ReferralCreated: (callback:(error:Error|null,events:any)=>void)=>void 
    Referred: (callback:(error:Error|null,events:any)=>void)=>void 
  }
  methods:{
    addAsset:(asset:number,name:string,_chainlinkFed:address,minLeverage:number,maxLeverage:number,feeMultiplier:number,baseFundingRate:number)=>void

  }
}
