import { Contract as EthContract } from "web3-eth-contract";
export default interface Contract extends EthContract {
    events: {
        AssetAdded: (callback: (internalType: number) => void) => void;
    };
}
