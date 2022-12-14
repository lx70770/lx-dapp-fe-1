import { JsonRpcProvider, Provider, Web3Provider } from '@ethersproject/providers'
import { BigNumber, Contract, ContractInterface, ContractTransaction, Signer } from 'ethers'
import LXMFERAbi from '../abi/lx_mfer'
import { LX_MFER_ADDRESS } from './../constants/index'
export function makeContract<T extends Contract>(address: string, abi: ContractInterface, library: Web3Provider | JsonRpcProvider, account?: string) {
  const signerOrProvider: Signer | Provider = account ? library.getSigner(account) : library
  return new Contract(address, abi, signerOrProvider) as T
}

export interface LXMFERContract extends Contract {
  balanceOf: (address: string) => Promise<BigNumber>
  totalSupply: () => Promise<BigNumber>
  mint: (address: string) => Promise<ContractTransaction>
  tokenOfOwnerByIndex: (address: string, index: string) => Promise<BigNumber>
}

export function makeLXMFERContract(provider: Web3Provider | JsonRpcProvider, account?: string) {
  return makeContract<LXMFERContract>(LX_MFER_ADDRESS, LXMFERAbi, provider, account)
}
