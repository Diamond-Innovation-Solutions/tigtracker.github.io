import { Contract as EthContract } from "web3-eth-contract"



type address = string
type UInt256 = string
type Bytes32 = string

export interface Asset {

  asset:UInt256,
  name:string,
  chainlinkFed:address,
  minLeverage:UInt256,
  maxLeverage:UInt256,
  feeMultiplier:UInt256,
  baseFundingRate:UInt256

}

export interface OpenInterest { 

  longOi: UInt256,
  shortOi: UInt256,
  maxOi: UInt256

}

export default interface Contract extends EthContract {
  events:{
    AssetAdded: (callback:(error:Error|null,events:any)=>void)=>void
    OwnershipTransfered: (callback:(error:Error|null,events:any)=>void)=>void 
    ReferralCreated: (callback:(error:Error|null,events:any)=>void)=>void 
    Referred: (callback:(error:Error|null,events:any)=>void)=>void 
    allEvents: (callback:(error:Error|null,events:any)=>void)=>void 
  }
  methods:{

    addAsset:(asset:UInt256,name:string,chainlinkFed:address,minLeverage:UInt256,maxLeverage:UInt256,feeMultiplier:UInt256,baseFundingRate:UInt256) => void
    allowedAsset: (address: UInt256) => boolean
    createReferralCode: (hash: Bytes32) => void
    getReferral: (hash: Bytes32) => address
    getReffered: (trader: address) => address
    idToAsset: (asset: UInt256) => Asset
    idToOi: (asset: UInt256, tigAsset: address) => OpenInterest
    modifyLongOi: (asset: UInt256, tigAsset: address, onOpen:boolean, ammount:UInt256) => void
    modifyShortOi: (asset: UInt256, tigAsset: address, onOpen:boolean, ammount:UInt256) => void
    owner: () => address
    pauseAsset: (asset: UInt256, isPaused: boolean) => void
    protocol: () => address
    renounceOwnership: () => void
    setAssetBaseFundingRate: (asset: UInt256,baseFundingRate: UInt256) => void
    setAssetChainlinkFeed: (asset: UInt256, fed: address) => void
    setMaxBaseFundingRate: (maxBaseFundingRate: UInt256) => void
    setMaxOi: (asset: UInt256, tigAsset:address, maxOi: UInt256) => void
    setProtocol: (protocol: address) => void
    setReffered: (refferedTrader: address, hash: Bytes32) => void
    transferOwnership: (newOwner: address) => void
    updateAssetFeeMultiplier: (asset: UInt256, feeMultiplier:UInt256) => void
    updateAssetLeverage:(asset: UInt256, minLeverage:UInt256, maxLeverage:UInt256) => void

  }
}
