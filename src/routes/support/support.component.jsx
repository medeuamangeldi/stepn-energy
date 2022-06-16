import {Container, Col, Row} from 'react-bootstrap';
import logoSOL from '../../assets/sol.png';
import Copy from '../../assets/copy.png';
import { Button } from 'react-bootstrap';

const Support = () => {
    return (
        <Container>
            <Row className='align-items-center justify-content-center'>
                <Col xs='auto' md='auto' lg='auto'>
                    <h4> Make a donation to support the project ^_^</h4>
                </Col>
            </Row>

            <Row className='align-items-center justify-content-center mt-3'>
                <Col className='mt-3' xs='auto' md='auto' lg='auto'>
                <img height={35} width={35} src={logoSOL} alt="" />
                </Col>
                <Col className='mt-3' xs='auto' md='auto' lg='auto'>
                <img height={35} width={35} src="https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png" alt="" />
                </Col>
                <Col className='mt-3' xs='auto' md='auto' lg='auto'>
                <img height={35} width={35} src="https://s2.coinmarketcap.com/static/img/coins/64x64/18069.png" alt="" />
                </Col>
                <Col className='mt-3' xs='auto' md='auto' lg='auto'>
                <img height={35} width={35} src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png" alt="" />
                </Col>
            </Row>

            <Row className='align-items-center justify-content-center mt-3'>
                <Col className='mt-3' xs='auto' md='auto' lg='auto'>
                <Button  type='button' variant="light" size="md"
                    onClick={() =>  {navigator.clipboard.writeText('8Dqz2jVDUF4YR2WBH7GzSSTznbQsD8pQLhzvRRLHjH2X');}}
                    >
                <span> 8Dqz2jVDUF4YR2WBH7GzSSTznbQsD8pQLhzvRRLHjH2X <img height={20} width={20} src={Copy}></img> </span> 
                </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Support;