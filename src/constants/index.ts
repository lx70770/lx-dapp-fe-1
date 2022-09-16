import { JsonRpcProvider } from '@ethersproject/providers'
import { AddEthereumChainParameter } from '@web3-react/types'

export const ETH_TEST_CHAIN_ID = 4
export const ETH_MAINNET_CHAIN_ID = 1

const rinkebyParams: AddEthereumChainParameter = {
  chainId: ETH_TEST_CHAIN_ID,
  rpcUrls: ['https://rinkeby.infura.io/v3/'],
  chainName: 'Rinkeby Network',
  nativeCurrency: {
    name: 'RinkebyETH',
    symbol: 'RinkebyETH',
    decimals: 18,
  },
  blockExplorerUrls: ['https://rinkeby.etherscan.io/'],
}

const ethParams: AddEthereumChainParameter = {
  chainId: ETH_MAINNET_CHAIN_ID,
  rpcUrls: ['https://mainnet.infura.io/v3/'],
  chainName: 'Ethereum Network',
  nativeCurrency: {
    name: 'ETH',
    symbol: 'ETH',
    decimals: 18,
  },
  blockExplorerUrls: ['https://etherscan.io'],
}

export const LX_MFER_ADDRESS = '0xDf66Dff5F4CAd5f9c194cBc8849E4033Fb0CEFB8'

export const DEFAULT_JSON_PROVIDER = new JsonRpcProvider()

export const isProd = ENV === 'prod'

export const CURRENT_NEED_NETWORK = isProd ? ETH_MAINNET_CHAIN_ID : ETH_TEST_CHAIN_ID
export const CURRENT_NEED_NETWORK_PARAMS = isProd ? ethParams : rinkebyParams

export * from './chains'
