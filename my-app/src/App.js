import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import RewindGame from './Components/RewindGame';


// 1. Get projectId
const projectId = 'dd7304c51cd80d02ea10d7217f4c452c'

// 2. Create wagmiConfig
const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, appName: 'Web3Modal' })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

export default function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
        <w3m-button style={{alignContent: 'center'}}/>
        <div className="App">
        <header className="App-header">
          <RewindGame/>
        </header>
      </div>
    </WagmiConfig>
  )
}


// import logo from './logo.svg';
// import './App.css';
// import ConcentricCircles from './Components/ConcentricCircles';
// import RewindLevel from './Components/RewindLevel';
// import RewindGame from './Components/RewindGame';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <RewindGame/>
//       </header>
//     </div>
//   );
// }

// export default App;
