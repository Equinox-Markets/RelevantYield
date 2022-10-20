import { publicConfig } from './public';

export type NetworkObject = {
  name: string;
  chainId: number;
  rpcUrl: string;
  logoUrl: string;
  explorerUrl: string;
  explorerName: string;
  nativeCoin: string;
  // blockPerSeconds: number;
  // multicallAddr: string;
  type: 'mainnet' | 'testnet';
};

export const defaultNetworks: NetworkObject[] = [
  {
    name: 'ETH',
    chainId: 1,
    rpcUrl: `https://www.ankr.com/rpc/eth`,
    logoUrl: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/icon/eth.svg',
    explorerUrl: 'https://etherscan.io',
    explorerName: 'EtherScan',
    nativeCoin: 'ETH',
    type: 'mainnet'
  },
  {
    name: 'Polygon',
    chainId: 137,
    logoUrl: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/icon/matic.svg',
    rpcUrl: 'https://www.ankr.com/rpc/polygon',
    explorerUrl: 'https://explorer-mainnet.maticvigil.com/',
    explorerName: 'PolygonScan',
    nativeCoin: 'MATIC',
    type: 'mainnet'
  },
  {
    name: 'Avalanche',
    chainId: 43114,
    rpcUrl: 'https://rpc.ankr.com/avalanche',
    logoUrl: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/icon/avax.svg',
    explorerUrl: 'https://subnets.avax.network/',
    explorerName: 'AVAXScan',
    nativeCoin: 'AVAX',
    type: 'mainnet'
  },
  {
    name: 'Fantom',
    chainId: 250,
    rpcUrl: 'https://rpc.ankr.com/fantom',
    logoUrl: 'https://cryptologos.cc/logos/fantom-ftm-logo.svg',
    explorerUrl: 'https://ftmscan.com/',
    explorerName: 'FTMScan',
    nativeCoin: 'FTM',
    type: 'mainnet'
  },
  
};
