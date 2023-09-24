import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import RewindGame from '../Components/RewindGame';
import { useEffect } from 'react';
import QuickNode from '@quicknode/sdk';
import BgParticles from './BgParticles';

 
export default function Profile() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  useEffect(()=>{
    const qn = new QuickNode.API({defaultChain: 'polygon'});

    qn.nfts
    .getByContractAddress({
        contractAddress: '0x7d5861cfe1C74Aaa0999b7E2651Bf2ebD2A62D89',
        first: 5,
    })
    .then((response) => console.log(response));

  },[address])
 
  if (isConnected)
    return (
        <div className="App">
            <header className="App-header">
            <w3m-button label='sm' balance='show'/>
            <RewindGame/>
            </header>
        </div>
    )
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'center', height: '100vh'}}>
        <BgParticles/>
        <h1 style={{margin: 10, textAlign: 'center', fontFamily: 'Sofia Sans', fontSize: 50}}>Rewind : Base OnChain Summer</h1>
        <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'Sofia Sans'}}>
            <w3m-button style={{}}/>
        </div>
    </div>
  )
}