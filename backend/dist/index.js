"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    const abi = JSON.parse((yield (yield fetch('https://api.arbiscan.io/api?module=contract&action=getabi&address=0x0e6E91221C46904563fAfDCc814fbF342BE8Ba20')).json()).result);
    const web3 = new web3_1.default(new web3_1.default.providers.HttpProvider('https://rpc.flashbots.net/'));
    const contract = new web3.eth.Contract(abi, '0x0e6E91221C46904563fAfDCc814fbF342BE8Ba20');
    contract.events.AssetAdded((...args) => console.log(JSON.stringify(args)));
}))();
