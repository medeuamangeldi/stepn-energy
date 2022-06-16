import './add-result.styles.scss';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useState } from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const defaultRunFormFields = {
    realm: 'Solana',
    sneakerType: 'Walker',
    sneakerRarity: 'Common',
    sneakerLevel: 0,
    gstEarned: 0,
    energySpent: 0,
    durability: 0,
    eff: 0,
    res: 0,
    luck: 0,
    misteryBox: true,
    misteryBoxLevel: 1
}

const defaultScrollFormFields = {
    OpenedMisteryBoxLevel: 1,
    ScrollDropped: true,
    ScrollRarity: "Common"
}


const AddResult = () => {

    const [FormRunFields, setFormRunFields] = useState(defaultRunFormFields);

    const [dnone, setDnone] = useState('');

    const [dnoneRun, setDnoneRun] = useState('');

    const [FormScrollFields, setFormScrollFields] = useState(defaultScrollFormFields);

    const resetScrollFormFields = () => {
        setFormScrollFields(defaultScrollFormFields);
    }

    const handleSubmitRun = async (e) => {
        
        e.preventDefault();

        const rawResponse = await fetch('http://localhost:3001/api/postRun', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(FormRunFields)
        });
        const content = await rawResponse.json();
        
        alert('Added Successfully! ' + JSON.stringify(content));

    };

    const handleChangeRealm = (event) => {
        setFormRunFields(prevState => ({
            realm: event.target.value,
            sneakerType: prevState.sneakerType,
            sneakerRarity: prevState.sneakerRarity,
            sneakerLevel: prevState.sneakerLevel,
            gstEarned: prevState.gstEarned,
            energySpent: prevState.energySpent,
            durability: prevState.durability,
            eff: prevState.eff,
            res: prevState.res,
            luck: prevState.luck,
            misteryBox: prevState.misteryBox,
            misteryBoxLevel: prevState.misteryBoxLevel
        }));
    }

    const handleChangeType = (event) => {
        setFormRunFields(prevState => ({
            realm: prevState.realm,
            sneakerType: event.target.value,
            sneakerRarity: prevState.sneakerRarity,
            sneakerLevel: prevState.sneakerLevel,
            gstEarned: prevState.gstEarned,
            energySpent: prevState.energySpent,
            durability: prevState.durability,
            eff: prevState.eff,
            res: prevState.res,
            luck: prevState.luck,
            misteryBox: prevState.misteryBox,
            misteryBoxLevel: prevState.misteryBoxLevel
        }));
    }

    const handleChangeRarity = (event) => {
        setFormRunFields(prevState => ({
            realm: prevState.realm,
            sneakerType: prevState.sneakerType,
            sneakerRarity: event.target.value,
            sneakerLevel: prevState.sneakerLevel,
            gstEarned: prevState.gstEarned,
            energySpent: prevState.energySpent,
            durability: prevState.durability,
            eff: prevState.eff,
            res: prevState.res,
            luck: prevState.luck,
            misteryBox: prevState.misteryBox,
            misteryBoxLevel: prevState.misteryBoxLevel
        }));
    }

    const handleChangeLevel = (event) => {
        setFormRunFields(prevState => ({
            realm: prevState.realm,
            sneakerType: prevState.sneakerType,
            sneakerRarity: prevState.sneakerRarity,
            sneakerLevel: parseFloat(event.target.value),
            gstEarned: prevState.gstEarned,
            energySpent: prevState.energySpent,
            durability: prevState.durability,
            eff: prevState.eff,
            res: prevState.res,
            luck: prevState.luck,
            misteryBox: prevState.misteryBox,
            misteryBoxLevel: prevState.misteryBoxLevel
        }));
    }

    const handleChangeGst = (event) => {
        setFormRunFields(prevState => ({
            realm: prevState.realm,
            sneakerType: prevState.sneakerType,
            sneakerRarity: prevState.sneakerRarity,
            sneakerLevel: prevState.sneakerLevel,
            gstEarned: parseFloat(event.target.value),
            energySpent: prevState.energySpent,
            durability: prevState.durability,
            eff: prevState.eff,
            res: prevState.res,
            luck: prevState.luck,
            misteryBox: prevState.misteryBox,
            misteryBoxLevel: prevState.misteryBoxLevel
        }));
    }

    const handleChangeEnergy = (event) => {
        setFormRunFields(prevState => ({
            realm: prevState.realm,
            sneakerType: prevState.sneakerType,
            sneakerRarity: prevState.sneakerRarity,
            sneakerLevel: prevState.sneakerLevel,
            gstEarned: prevState.gstEarned,
            energySpent: parseFloat(event.target.value),
            durability: prevState.durability,
            eff: prevState.eff,
            res: prevState.res,
            luck: prevState.luck,
            misteryBox: prevState.misteryBox,
            misteryBoxLevel: prevState.misteryBoxLevel
        }));
    }

    const handleChangeDur = (event) => {
        setFormRunFields(prevState => ({
            realm: prevState.realm,
            sneakerType: prevState.sneakerType,
            sneakerRarity: prevState.sneakerRarity,
            sneakerLevel: prevState.sneakerLevel,
            gstEarned: prevState.gstEarned,
            energySpent: prevState.energySpent,
            durability: parseFloat(event.target.value),
            eff: prevState.eff,
            res: prevState.res,
            luck: prevState.luck,
            misteryBox: prevState.misteryBox,
            misteryBoxLevel: prevState.misteryBoxLevel
        }));
    }

    const handleChangeEff = (event) => {
        setFormRunFields(prevState => ({
            realm: prevState.realm,
            sneakerType: prevState.sneakerType,
            sneakerRarity: prevState.sneakerRarity,
            sneakerLevel: prevState.sneakerLevel,
            gstEarned: prevState.gstEarned,
            energySpent: prevState.energySpent,
            durability: prevState.durability,
            eff: parseFloat(event.target.value),
            res: prevState.res,
            luck: prevState.luck,
            misteryBox: prevState.misteryBox,
            misteryBoxLevel: prevState.misteryBoxLevel
        }));
    }

    const handleChangeRes = (event) => {
        setFormRunFields(prevState => ({
            realm: prevState.realm,
            sneakerType: prevState.sneakerType,
            sneakerRarity: prevState.sneakerRarity,
            sneakerLevel: prevState.sneakerLevel,
            gstEarned: prevState.gstEarned,
            energySpent: prevState.energySpent,
            durability: prevState.durability,
            eff: prevState.eff,
            res: parseFloat(event.target.value),
            luck: prevState.luck,
            misteryBox: prevState.misteryBox,
            misteryBoxLevel: prevState.misteryBoxLevel
        }));

    }

    const handleChangeLuck = (event) => {
        setFormRunFields(prevState => ({
            realm: prevState.realm,
            sneakerType: prevState.sneakerType,
            sneakerRarity: prevState.sneakerRarity,
            sneakerLevel: prevState.sneakerLevel,
            gstEarned: prevState.gstEarned,
            energySpent: prevState.energySpent,
            durability: prevState.durability,
            eff: prevState.eff,
            res: prevState.res,
            luck: parseFloat(event.target.value),
            misteryBox: prevState.misteryBox,
            misteryBoxLevel: prevState.misteryBoxLevel
        }));
    }

    const handleChangeMb = (event) => {

        setDnoneRun(((event.target.value == 'false') ? 'd-none': ''));

        setFormRunFields(prevState => ({
            realm: prevState.realm,
            sneakerType: prevState.sneakerType,
            sneakerRarity: prevState.sneakerRarity,
            sneakerLevel: prevState.sneakerLevel,
            gstEarned: prevState.gstEarned,
            energySpent: prevState.energySpent,
            durability: prevState.durability,
            eff: prevState.eff,
            res: prevState.res,
            luck: prevState.luck,
            misteryBox: event.target.value == 'true',
            misteryBoxLevel: prevState.misteryBoxLevel
        }));
    }

    const handleChangeMbLevel = (event) => {
        setFormRunFields(prevState => ({
            realm: prevState.realm,
            sneakerType: prevState.sneakerType,
            sneakerRarity: prevState.sneakerRarity,
            sneakerLevel: prevState.sneakerLevel,
            gstEarned: prevState.gstEarned,
            energySpent: prevState.energySpent,
            durability: prevState.durability,
            eff: prevState.eff,
            res: prevState.res,
            luck: prevState.luck,
            misteryBox: prevState.misteryBox,
            misteryBoxLevel: parseFloat(event.target.value)
        }));
    }

    const handleSubmitScroll = async (e) => {
        
        e.preventDefault();

        const rawResponse = await fetch('http://localhost:3001/api/postScroll', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(FormScrollFields)
        });
        const content = await rawResponse.json();
        
        alert('Added Successfully! ' + JSON.stringify(content));
    
    };


    const handleChangeMbLvl = (event) => {
        setFormScrollFields(prevState => ({
            OpenedMisteryBoxLevel: parseFloat(event.target.value),
            ScrollDropped: prevState.ScrollDropped,
            ScrollRarity: prevState.ScrollRarity
        }));

    };

    const handleChangeYesNo = (event) => {

        setDnone(((event.target.value == 'false') ? 'd-none': ''));

        setFormScrollFields(prevState => ({
            OpenedMisteryBoxLevel: prevState.OpenedMisteryBoxLevel,
            ScrollDropped: event.target.value == 'true',
            ScrollRarity:  ((event.target.value == 'true')  ? defaultScrollFormFields.ScrollRarity : null)
        }));

    };

    const handleChangeScroll = (event) => {

        setFormScrollFields(prevState => ({
            OpenedMisteryBoxLevel: prevState.OpenedMisteryBoxLevel,
            ScrollDropped: prevState.ScrollDropped,
            ScrollRarity: event.target.value
        }));

    };

    return (
        <div>
            <Row className='align-items-center justify-content-center mt-5'>
                <Col xs='auto' md='auto' lg='auto'>
                <Form onSubmit={handleSubmitRun}>
                <Form.Group as={Row} className="mb-3 d-grid gap-2">
                    <Form.Text>
                    <h1>Walking/Running Result</h1>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel controlId="floatingSelect" label="Realm">
                        <Form.Select onChange={handleChangeRealm} aria-label="Floating label select example">
                            <option value={"Solana"}>SOL</option>
                            <option value={"Binance"}>BNB</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel controlId="floatingSelect" label="Type">
                        <Form.Select onChange={handleChangeType} aria-label="Floating label select example">
                            <option value={"Walker"}>Walker</option>
                            <option value={"Jogger"}>Jogger</option>
                            <option value={"Runner"}>Runner</option>
                            <option value={"Jogger"}>Trainer</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel controlId="floatingSelect" label="Rarity">
                        <Form.Select onChange={handleChangeRarity} aria-label="Floating label select example">
                            <option value={"Common"}>Common</option>
                            <option value={"Uncommon"}>Uncommon</option>
                            <option value={"Rare"}>Rare</option>
                            <option value={"Epic"}>Epic</option>
                            <option value={"Legendary"}>Legendary</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel controlId="floatingSelect" label="Level">
                        <Form.Select onChange={handleChangeLevel} aria-label="Floating label select example">
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                            <option value={25}>25</option>
                            <option value={26}>26</option>
                            <option value={27}>27</option>
                            <option value={28}>28</option>
                            <option value={29}>29</option>
                            <option value={30}>30</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="GST Earned"
                        className="mb-3"
                        column sm={4}
                    >   
                    <Form.Control step={0.01} min={0.1} required onChange={handleChangeGst} type="number" placeholder=" " size="md"/>
                
                    
                </FloatingLabel>
                </Form.Group>
                
                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Energy Spent"
                        className="mb-3"
                        column sm={4}
                    >   
                    <Form.Control step={0.1} min={0.2} required onChange={handleChangeEnergy} type="number" placeholder=" " size="md"/>
                
                    
                </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Durability Lost"
                        className="mb-3"
                        column sm={4}
                    >   
                    <Form.Control step={1} min={1} required onChange={handleChangeDur} type="number" placeholder=" " size="md"/>
                
                    
                </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Total Efficiency"
                        className="mb-3"
                        column sm={4}
                    >   
                    <Form.Control step={0.1} min={1} required onChange={handleChangeEff} type="number" placeholder=" " size="md"/>
                
                    
                </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Total Luck"
                        className="mb-3"
                        column sm={4}
                    >   
                    <Form.Control step={0.1} min={1} required onChange={handleChangeLuck} type="number" placeholder=" " size="md"/>
                
                    
                </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Total Resilience"
                        className="mb-3"
                        column sm={4}
                    >   
                    <Form.Control step={0.1} min={1} required onChange={handleChangeRes} type="number" placeholder=" " size="md"/>
                
                    
                </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel controlId="floatingSelect" label="Did Mistery Box Drop?">
                        <Form.Select onChange={handleChangeMb} aria-label="Floating label select example">
                            <option value={true}>Yes. Yayy!</option>
                            <option value={false}>Sadly No...</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className={`mb-3 align-items-center ${dnoneRun}`}>
                    <FloatingLabel controlId="floatingSelect" label="Mistery Box Level">
                        <Form.Select onChange={handleChangeMbLevel} aria-label="Floating label select example">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Col className="d-grid gap-2">
                        <Button type="submit" size="lg" variant="outline-dark">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
                
                </Col>

            </Row>

            <Row className='align-items-center justify-content-center mt-5'>
                <Col xs='auto' md='auto' lg='auto'>
                <Form onSubmit={handleSubmitScroll}>
                <Form.Group className="mb-3 d-grid gap-2">
                    <Form.Text>
                    <h1>Minting Scroll Drop Result</h1>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel controlId="floatingSelect" label="Mystery Box Level">
                        <Form.Select onChange={handleChangeMbLvl} aria-label="Floating label select example">
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className="mb-3 align-items-center">
                    <FloatingLabel controlId="floatingSelect" label="Did Minting Scroll Drop?">
                        <Form.Select onChange={handleChangeYesNo} aria-label="Floating label select example">
                            <option value={true}>Yes</option>
                            <option value={false}>No</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>

                <Form.Group className={`mb-3 align-items-center ${dnone}`}>
                    <FloatingLabel controlId="floatingSelect" label="Scroll Rarity">
                        <Form.Select onChange={handleChangeScroll} aria-label="Floating label select example">
                            <option value="Common">Common</option>
                            <option value="Uncommon">Uncommon</option>
                            <option value="Rare">Rare</option>
                            <option value="Epic">Epic</option>
                            <option value="Legendary">Legendary</option>
                        </Form.Select>
                    </FloatingLabel>
                </Form.Group>
               
                <Form.Group className="mb-3 align-items-center">
                    <Col className="d-grid gap-2">
                    <Button type="submit" size="lg" variant="outline-dark">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
                
                </Col>

            </Row>
            
        </div>
    );
}

export default AddResult;