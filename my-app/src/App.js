import { createContext } from 'react';
import './App.css';
import Componanta from './Componants/Componanta';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const UseContext = createContext()
export const ChannelContext = createContext()

function App() {
  return (
    <div className="App">
      <h1>Welcome Here</h1>
      <FontAwesomeIcon icon={faThumbsUp} />
      <UseContext.Provider value={"Nora"}>
        <ChannelContext.Provider value={"Front End Development Channel"}>
          <Componanta />
        </ChannelContext.Provider>
      </UseContext.Provider>
    </div>
  );
}

export default App;
