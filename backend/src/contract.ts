import { Contract as EthContract } from "web3-eth-contract"



type address = string
type UInt256 = number

export default interface Contract extends EthContract {
  events:{
    AssetAdded: (callback:(error:Error|null,events:any)=>void)=>void
    OwnershipTransfered: (callback:(error:Error|null,events:any)=>void)=>void 
    ReferralCreated: (callback:(error:Error|null,events:any)=>void)=>void 
    Referred: (callback:(error:Error|null,events:any)=>void)=>void 
    allEvents: (callback:(error:Error|null,events:any)=>void)=>void 
  }
  methods:{
    addAsset:(asset:UInt256,name:string,_chainlinkFed:address,minLeverage:UInt256,maxLeverage:UInt256,feeMultiplier:UInt256,baseFundingRate:UInt256)=>void


  }
}
