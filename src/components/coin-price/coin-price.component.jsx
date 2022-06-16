import './coin-price.styles.scss';
import {Col} from 'react-bootstrap';

const CoinPrice = (props) => {
    
    // const priceUSD = `${props.priceUSD}`.slice(0,7);
    let priceUSD = parseFloat(props.priceUSD).toFixed(2);
    let priceKZT = parseFloat(props.priceKZT).toFixed(2);
    
    return (
        <Col xs='auto' md='auto' lg='auto' >
            <img className="btc-logo" src={props.logo} alt="Bitcoin" />
            <span className="btc-price text-wrap">
            {props.name + ":" + " $" + priceUSD + " or KZT" + priceKZT}
            </span>  
        </Col>
    );
  };
  
  export default CoinPrice;