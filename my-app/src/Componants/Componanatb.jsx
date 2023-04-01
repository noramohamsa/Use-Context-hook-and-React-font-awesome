import React, { useContext } from 'react'
import Componanatc from './Componanatc'
import { ChannelContext } from '../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Componanatb() {
    const Channel = useContext(ChannelContext)
    return (
        <div>
            <Componanatc />
            <p>And This Channel For  : {Channel}</p>
            <p>How Can I help you?</p>
            <div>
                <input type="search" placeholder='Ask Me' className='input'></input>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
            </div>

        </div>
    )
}

export default Componanatb
