import './button-chain.styles.scss';
import {Container, Col, Row} from 'react-bootstrap';
import logoSOL from '../../assets/sol.png';
import logoBSC from '../../assets/bsc.png';
import logoEth from '../../assets/eth.svg';
import logoQuestion from '../../assets/question.png';

import { useState } from 'react';
const ButtonChain = (props) => {

    const BUTTON_TYPES = {
        sol: 'imageSol',
        bsc: 'imageBsc',
        eth: 'imageEth'
    }
    const [iconMap, setIconMap] = useState({
        'sol': logoSOL, 
        'bsc': logoBSC,
        'eth': logoEth,
        'question': logoQuestion
      });

    return (
        <Col xs='auto' md='auto' lg='auto'>
            <button className="statusButton rounded-circle" onClick={props.handler}><img className={`${BUTTON_TYPES[props.buttonStyle]}`} src={iconMap[props.icon]} alt="sol" /></button>
        </Col>
    );
}

export default ButtonChain;