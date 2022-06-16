import { Outlet } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";
import CoinPrice from "../../components/coin-price/coin-price.component";
import './home.styles.scss';
import {Container, Col, Row} from 'react-bootstrap';
import ButtonChain from "../../components/button-chain/button-chain.component";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  RadialLinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Radar, Scatter } from 'react-chartjs-2';

ChartJS.register(ArcElement, BarElement, CategoryScale, Filler, LinearScale, PointElement, RadialLinearScale, LineElement, Tooltip, Legend);

const Home = () => {
  const optionsScrolls = {
    title: {
      display: false
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  const optionsEff = {
    responsive: true, 
    maintainAspectRatio: true,
      scales: {
        y: {
            beginAtZero: false,
            title: {
                display: true,
                text: 'GST / 1 Energy'
            }
        },
        x: {
            beginAtZero: false,
            title: {
                display: true,
                text: 'Efficiency'
            }
        }
    },
    title: {
      display: true,
      text: 'Efficiency vs. GST / 1 Energy'
  },
    plugins: {
        
        legend: {
            display: true,
            position: 'top',
            labels: {
                usePointStyle: true,
                pointStyle: 'rectRounded'
            }
        }
    }
  };

  const optionsRes = {
    responsive: true, 
    maintainAspectRatio: true,
    scales: {
      y: {
          beginAtZero: false,
          title: {
              display: true,
              text: 'Durability / 1 Energy'
          }
      },
      x: {
          beginAtZero: false,
          title: {
              display: true,
              text: 'Resilience'
          }
      }
  },
  title: {
    display: true,
    text: 'Resilience vs. Durability/ 1 Energy'
},
  plugins: {
      
      legend: {
          display: true,
          position: 'top',
          labels: {
              usePointStyle: true,
              pointStyle: 'circle'
          }
      }
  }
};

const optionsMb = {
  responsive: true, 
  maintainAspectRatio: true,
  scales: {
    y: {
        beginAtZero: false,
        title: {
            display: true,
            text: 'Energy'
        }
    },
    x: {
        beginAtZero: false,
        title: {
            display: true,
            text: 'Luck'
        }
    }
},
title: {
  display: true,
  text: 'Luck vs. Energy'
},
plugins: {
   
    legend: {
        display: true,
        position: 'top',
        labels: {
            usePointStyle: true,
            pointStyle: 'triangle'
        }
    }
}
};

  
  
  const [coinPrices, getCoinPrices] = useState({
    date_added: '',
    gst_sol_usd: '',
    gst_sol_kzt: '',
    gst_bsc_usd: '',
    gst_bsc_kzt: '',
    sol_usd: '',
    sol_kzt: '',
    bnb_usd: '',
    bnb_kzt: '',
    gmt_usd: '',
    gmt_kzt: '',
    dollar: '',
    last_updated: ''
  });
  
  const [Chain, getChain] = useState({
    GST_USD: coinPrices.gst_sol_usd,
    GST_KZT: coinPrices.gst_sol_kzt,
    ChainPrice_USD: coinPrices.sol_usd,
    ChainPrice_KZT: coinPrices.sol_kzt,
    GMT_USD: coinPrices.gmt_usd,
    GMT_KZT: coinPrices.gmt_kzt
  });

  const [CountWalkerSol, getCountWalkerSol] = useState({
    counter: 0
  });

  const [CountJoggerSol, getCountJoggerSol] = useState({
    counter: 0
  });

  const [CountRunnerSol, getCountRunnerSol] = useState({
    counter: 0
  });

  const [CountTrainerSol, getCountTrainerSol] = useState({
    counter: 0
  });

  const [CountWalkerBnb, getCountWalkerBnb] = useState({
    counter: 0
  });

  const [CountJoggerBnb, getCountJoggerBnb] = useState({
    counter: 0
  });

  const [CountRunnerBnb, getCountRunnerBnb] = useState({
    counter: 0
  });

  const [CountTrainerBnb, getCountTrainerBnb] = useState({
    counter: 0
  });

  const [CountMbOne, getCountMbOne] = useState({
    counterNone: 0,
    counterCommon: 0,
    counterUncommon: 0,
    counterRare: 0,
    counterEpic: 0,
    counterLegendary: 0
  });

  const [CountMbTwo, getCountMbTwo] = useState({
    counterNone: 0,
    counterCommon: 0,
    counterUncommon: 0,
    counterRare: 0,
    counterEpic: 0,
    counterLegendary: 0
  });

  const [CountMbThree, getCountMbThree] = useState({
    counterNone: 0,
    counterCommon: 0,
    counterUncommon: 0,
    counterRare: 0,
    counterEpic: 0,
    counterLegendary: 0
  });

  const [CountMbFour, getCountMbFour] = useState({
    counterNone: 0,
    counterCommon: 0,
    counterUncommon: 0,
    counterRare: 0,
    counterEpic: 0,
    counterLegendary: 0
  });

  const [CountMbFive, getCountMbFive] = useState({
    counterNone: 0,
    counterCommon: 0,
    counterUncommon: 0,
    counterRare: 0,
    counterEpic: 0,
    counterLegendary: 0
  });

  const [CountMbSix, getCountMbSix] = useState({
    counterNone: 0,
    counterCommon: 0,
    counterUncommon: 0,
    counterRare: 0,
    counterEpic: 0,
    counterLegendary: 0
  });

  const [CountMbSeven, getCountMbSeven] = useState({
    counterNone: 0,
    counterCommon: 0,
    counterUncommon: 0,
    counterRare: 0,
    counterEpic: 0,
    counterLegendary: 0
  });

  const [CountMbEight, getCountMbEight] = useState({
    counterNone: 0,
    counterCommon: 0,
    counterUncommon: 0,
    counterRare: 0,
    counterEpic: 0,
    counterLegendary: 0
  });

  const [CountMbNine, getCountMbNine] = useState({
    counterNone: 0,
    counterCommon: 0,
    counterUncommon: 0,
    counterRare: 0,
    counterEpic: 0,
    counterLegendary: 0
  });

  const [CountMbTen, getCountMbTen] = useState({
    counterNone: 0,
    counterCommon: 0,
    counterUncommon: 0,
    counterRare: 0,
    counterEpic: 0,
    counterLegendary: 0
  });


  const [MbZero, getMbZero] = useState({
    data: [{x: null, y: null}]
  });

  const [MbOne, getMbOne] = useState({
    data: [{x: null, y: null}]
  });

  const [MbTwo, getMbTwo] = useState({
    data: [{x: null, y: null}]
  });

  const [MbThree, getMbThree] = useState({
    data: [{x: null, y: null}]
  });

  const [MbFour, getMbFour] = useState({
    data: [{x: null, y: null}]
  });

  const [MbFive, getMbFive] = useState({
    data: [{x: null, y: null}]
  });

  const [MbSix, getMbSix] = useState({
    data: [{x: null, y: null}]
  });

  const [MbSeven, getMbSeven] = useState({
    data: [{x: null, y: null}]
  });

  const [MbEight, getMbEight] = useState({
    data: [{x: null, y: null}]
  });

  const [MbNine, getMbNine] = useState({
    data: [{x: null, y: null}]
  });

  const [MbTen, getMbTen] = useState({
    data: [{x: null, y: null}]
  });

  const [Res, getRes] = useState({
    data: [{x: null, y: null}]
  });

  const [EffWalker, getEffWalker] = useState({
    data: [{x: null, y: null}]
  });

  const [EffJogger, getEffJogger] = useState({
    data: [{x: null, y: null}]
  });

  const [EffRunner, getEffRunner] = useState({
    data: [{x: null, y: null}]
  });

  const [EffTrainer, getEffTrainer] = useState({
    data: [{x: null, y: null}]
  });

  const statusHandlerSol = () => {
    getChain({...Chain,
      GST_USD: coinPrices.gst_sol_usd,
      GST_KZT: coinPrices.gst_sol_kzt,
      ChainPrice_USD: coinPrices.sol_usd,
      ChainPrice_KZT: coinPrices.sol_kzt,
      GMT_USD: coinPrices.gmt_usd,
      GMT_KZT: coinPrices.gmt_kzt,
      nameChain: 'SOL',
      chainLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png'
    })
  };

  const statusHandlerBnb = () => {
    getChain({...Chain,
      GST_USD: coinPrices.gst_bsc_usd,
      GST_KZT: coinPrices.gst_bsc_kzt,
      ChainPrice_USD: coinPrices.bnb_usd,
      ChainPrice_KZT: coinPrices.bnb_kzt,
      GMT_USD: coinPrices.gmt_usd,
      GMT_KZT: coinPrices.gmt_kzt,
      nameChain: 'BNB',
      chainLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
    })
  };

  const statusHandlerEth = () => {
    getChain({...Chain,
      GST_USD: 0,
      GST_KZT: 0,
      ChainPrice_USD: 0,
      ChainPrice_KZT: 0,
      GMT_USD: coinPrices.gmt_usd,
      GMT_KZT: coinPrices.gmt_kzt,
      nameChain: 'Unknown',
      chainLogo: 'https://img.icons8.com/ios-glyphs/344/question-mark.png'
    })
  };

  useEffect(() => {

    const fetchCoinPrices = () => {
      axios.get('http://localhost:3001/api/getLastPrice')
      .then((response) => {
        let dataRetrieved = response.data[0];
   
        getCoinPrices({...coinPrices, 
         date_added: dataRetrieved.date_added,
         gst_sol_usd: dataRetrieved.GST.SOL.USD,
         gst_sol_kzt: dataRetrieved.GST.SOL.KZT,
         gst_bsc_usd: dataRetrieved.GST.BSC.USD,
         gst_bsc_kzt: dataRetrieved.GST.BSC.KZT,
         sol_usd: dataRetrieved.SOL.USD,
         sol_kzt: dataRetrieved.SOL.KZT,
         bnb_usd: dataRetrieved.BNB.USD,
         bnb_kzt: dataRetrieved.BNB.KZT,
         gmt_usd: dataRetrieved.GMT.USD,
         gmt_kzt: dataRetrieved.GMT.KZT,
         dollar: dataRetrieved.Dollar,
         last_updated: dataRetrieved.date_added
       });
      
       getChain({...Chain,
        GST_USD: dataRetrieved.GST.SOL.USD,
        GST_KZT: dataRetrieved.GST.SOL.KZT,
        ChainPrice_USD: dataRetrieved.SOL.USD,
        ChainPrice_KZT: dataRetrieved.SOL.KZT,
        GMT_USD: dataRetrieved.GMT.USD,
        GMT_KZT: dataRetrieved.GMT.KZT,
        nameChain: 'SOL',
        chainLogo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png'
      });

      })
      .catch(error => console.error(`Error: ${error}`))
   }

    fetchCoinPrices();
    
  }, []);

  useEffect(() => {
      axios.get('http://localhost:3001/api/getAllRuns')
      .then((response) => {

        let runsData = response.data;
        
        runsData.forEach(d => {
          
          if (d.sneakerType == 'Walker'){
            if (d.realm == 'Solana'){
              getCountWalkerSol(prevState => ({
                counter: prevState.counter + 1
              }))
            } else if (d.realm == 'Binance'){
              getCountWalkerBnb(prevState => ({
                counter: prevState.counter + 1
              }))
            }
            
          } else if (d.sneakerType == 'Jogger'){
              if (d.realm == 'Solana'){
                getCountJoggerSol(prevState => ({
                  counter: prevState.counter + 1
                }))
              } else if (d.realm == 'Binance'){
                getCountJoggerBnb(prevState => ({
                  counter: prevState.counter + 1
                }))
              }
          } else if (d.sneakerType == 'Runner'){
              if (d.realm == 'Solana'){
                getCountRunnerSol(prevState => ({
                  counter: prevState.counter + 1
                }))
              } else if (d.realm == 'Binance'){
                getCountRunnerBnb(prevState => ({
                  counter: prevState.counter + 1
                }))
              }
          } else {
              if (d.realm == 'Solana'){
                getCountTrainerSol(prevState => ({
                  counter: prevState.counter + 1
                }))
              } else if (d.realm == 'Binance'){
                getCountTrainerBnb(prevState => ({
                  counter: prevState.counter + 1
                }))
              }
          }

          if(d.misteryBox == false){
            getMbZero(prevState => ({
              data: [...prevState.data, {
                x: d.luck,
                y: d.energySpent
              }]}));
          } else {
            if (d.misteryBoxLevel == 1){
              getMbOne(prevState => ({
                data: [...prevState.data, {
                  x: d.luck,
                  y: d.energySpent
                  
                }]}));
            } else if (d.misteryBoxLevel == 2){
              getMbTwo(prevState => ({
                data: [...prevState.data, {
                  x: d.luck,
                  y: d.energySpent
                  
                }]}));
            } else if (d.misteryBoxLevel == 3){
              getMbThree(prevState => ({
                data: [...prevState.data, {
                  x: d.luck,
                  y: d.energySpent
                  
                }]}));
            } else if (d.misteryBoxLevel == 4){
              getMbFour(prevState => ({
                data: [...prevState.data, {
                  x: d.luck,
                  y: d.energySpent
                  
                }]}));
            } else if (d.misteryBoxLevel == 5){
              getMbFive(prevState => ({
                data: [...prevState.data, {
                  x: d.luck,
                  y: d.energySpent
                  
                }]}));
            } else if (d.misteryBoxLevel == 6){
              getMbSix(prevState => ({
                data: [...prevState.data, {
                  x: d.luck,
                  y: d.energySpent
                  
                }]}));
            } else if (d.misteryBoxLevel == 7){
              getMbSeven(prevState => ({
                data: [...prevState.data, {
                  x: d.luck,
                  y: d.energySpent
                  
                }]}));
            } else if (d.misteryBoxLevel == 8){
              getMbEight(prevState => ({
                data: [...prevState.data, {
                  x: d.luck,
                  y: d.energySpent
                  
                }]}));
            } else if (d.misteryBoxLevel == 9){
              getMbNine(prevState => ({
                data: [...prevState.data, {
                  x: d.luck,
                  y: d.energySpent
                  
                }]}));
            } else {
              getMbTen(prevState => ({
                data: [...prevState.data, {
                  x: d.luck,
                  y: d.energySpent
                  
                }]}));
            }
          }

          getRes(prevState => ({
            data: [...prevState.data, {
              x: d.res,
              y: d.durability/d.energySpent
              
            }]}));

          if (d.sneakerType == 'Jogger'){
            getEffJogger(prevState => ({
              data: [...prevState.data, {
                x: d.eff,
                y: d.gstEarned/(d.energySpent)
              
              }]}));
            } else if (d.sneakerType == 'Walker'){
              getEffWalker(prevState => ({
                data: [...prevState.data, {
                  x: d.eff,
                  y: d.gstEarned/(d.energySpent)
                
                }]}));
              } else if (d.sneakerType == 'Runner'){
                getEffRunner(prevState => ({
                  data: [...prevState.data, {
                    x: d.eff,
                    y: d.gstEarned/(d.energySpent)
                  
                  }]}));
                } else {
                  getEffTrainer(prevState => ({
                    data: [...prevState.data, {
                      x: d.eff,
                      y: d.gstEarned/(d.energySpent)
                    
                    }]}));
                }
        });


      })
      .catch(error => console.error(`Error: ${error}`))
  
  }, []);

  useEffect(() => {
    axios.get('http://localhost:3001/api/getAllScrolls')
    .then((response) => {

      let scrollsData = response.data;
      
      scrollsData.forEach(d => {
        if (d.OpenedMisteryBoxLevel == 1){
          getCountMbOne(prevState => ({
            counterNone: ((d.ScrollDropped == false) ? prevState.counterNone + 1 : prevState.counterNone),
            counterCommon: ((d.ScrollRarity == 'Common') ? prevState.counterCommon + 1 : prevState.counterCommon),
            counterUncommon: ((d.ScrollRarity == 'Uncommon') ? prevState.counterUncommon + 1 : prevState.counterUncommon),
            counterRare: ((d.ScrollRarity == 'Rare') ? prevState.counterRare + 1 : prevState.counterRare),
            counterEpic: ((d.ScrollRarity == 'Epic') ? prevState.counterEpic + 1 : prevState.counterEpic),
            counterLegendary: ((d.ScrollRarity == 'Legendary') ? prevState.counterLegendary + 1 : prevState.counterLegendary)
          
          }));
        } else if (d.OpenedMisteryBoxLevel == 2){
          getCountMbTwo(prevState => ({
            counterNone: ((d.ScrollDropped == false) ? prevState.counterNone + 1 : prevState.counterNone),
            counterCommon: ((d.ScrollRarity == 'Common') ? prevState.counterCommon + 1 : prevState.counterCommon),
            counterUncommon: ((d.ScrollRarity == 'Uncommon') ? prevState.counterUncommon + 1 : prevState.counterUncommon),
            counterRare: ((d.ScrollRarity == 'Rare') ? prevState.counterRare + 1 : prevState.counterRare),
            counterEpic: ((d.ScrollRarity == 'Epic') ? prevState.counterEpic + 1 : prevState.counterEpic),
            counterLegendary: ((d.ScrollRarity == 'Legendary') ? prevState.counterLegendary + 1 : prevState.counterLegendary)
          
          }));
        } else if (d.OpenedMisteryBoxLevel == 3){
          getCountMbThree(prevState => ({
            counterNone: ((d.ScrollDropped == false) ? prevState.counterNone + 1 : prevState.counterNone),
            counterCommon: ((d.ScrollRarity == 'Common') ? prevState.counterCommon + 1 : prevState.counterCommon),
            counterUncommon: ((d.ScrollRarity == 'Uncommon') ? prevState.counterUncommon + 1 : prevState.counterUncommon),
            counterRare: ((d.ScrollRarity == 'Rare') ? prevState.counterRare + 1 : prevState.counterRare),
            counterEpic: ((d.ScrollRarity == 'Epic') ? prevState.counterEpic + 1 : prevState.counterEpic),
            counterLegendary: ((d.ScrollRarity == 'Legendary') ? prevState.counterLegendary + 1 : prevState.counterLegendary)
          
          }));
        } else if (d.OpenedMisteryBoxLevel == 4){
          getCountMbFour(prevState => ({
            counterNone: ((d.ScrollDropped == false) ? prevState.counterNone + 1 : prevState.counterNone),
            counterCommon: ((d.ScrollRarity == 'Common') ? prevState.counterCommon + 1 : prevState.counterCommon),
            counterUncommon: ((d.ScrollRarity == 'Uncommon') ? prevState.counterUncommon + 1 : prevState.counterUncommon),
            counterRare: ((d.ScrollRarity == 'Rare') ? prevState.counterRare + 1 : prevState.counterRare),
            counterEpic: ((d.ScrollRarity == 'Epic') ? prevState.counterEpic + 1 : prevState.counterEpic),
            counterLegendary: ((d.ScrollRarity == 'Legendary') ? prevState.counterLegendary + 1 : prevState.counterLegendary)
          
          }));
        } else if (d.OpenedMisteryBoxLevel == 5){
          getCountMbFive(prevState => ({
            counterNone: ((d.ScrollDropped == false) ? prevState.counterNone + 1 : prevState.counterNone),
            counterCommon: ((d.ScrollRarity == 'Common') ? prevState.counterCommon + 1 : prevState.counterCommon),
            counterUncommon: ((d.ScrollRarity == 'Uncommon') ? prevState.counterUncommon + 1 : prevState.counterUncommon),
            counterRare: ((d.ScrollRarity == 'Rare') ? prevState.counterRare + 1 : prevState.counterRare),
            counterEpic: ((d.ScrollRarity == 'Epic') ? prevState.counterEpic + 1 : prevState.counterEpic),
            counterLegendary: ((d.ScrollRarity == 'Legendary') ? prevState.counterLegendary + 1 : prevState.counterLegendary)
          
          }));
        } else if (d.OpenedMisteryBoxLevel == 6){
          getCountMbSix(prevState => ({
            counterNone: ((d.ScrollDropped == false) ? prevState.counterNone + 1 : prevState.counterNone),
            counterCommon: ((d.ScrollRarity == 'Common') ? prevState.counterCommon + 1 : prevState.counterCommon),
            counterUncommon: ((d.ScrollRarity == 'Uncommon') ? prevState.counterUncommon + 1 : prevState.counterUncommon),
            counterRare: ((d.ScrollRarity == 'Rare') ? prevState.counterRare + 1 : prevState.counterRare),
            counterEpic: ((d.ScrollRarity == 'Epic') ? prevState.counterEpic + 1 : prevState.counterEpic),
            counterLegendary: ((d.ScrollRarity == 'Legendary') ? prevState.counterLegendary + 1 : prevState.counterLegendary)
          
          }));
        } else if (d.OpenedMisteryBoxLevel == 7){
          getCountMbSeven(prevState => ({
            counterNone: ((d.ScrollDropped == false) ? prevState.counterNone + 1 : prevState.counterNone),
            counterCommon: ((d.ScrollRarity == 'Common') ? prevState.counterCommon + 1 : prevState.counterCommon),
            counterUncommon: ((d.ScrollRarity == 'Uncommon') ? prevState.counterUncommon + 1 : prevState.counterUncommon),
            counterRare: ((d.ScrollRarity == 'Rare') ? prevState.counterRare + 1 : prevState.counterRare),
            counterEpic: ((d.ScrollRarity == 'Epic') ? prevState.counterEpic + 1 : prevState.counterEpic),
            counterLegendary: ((d.ScrollRarity == 'Legendary') ? prevState.counterLegendary + 1 : prevState.counterLegendary)
          
          }));
        } else if (d.OpenedMisteryBoxLevel == 8){
          getCountMbEight(prevState => ({
            counterNone: ((d.ScrollDropped == false) ? prevState.counterNone + 1 : prevState.counterNone),
            counterCommon: ((d.ScrollRarity == 'Common') ? prevState.counterCommon + 1 : prevState.counterCommon),
            counterUncommon: ((d.ScrollRarity == 'Uncommon') ? prevState.counterUncommon + 1 : prevState.counterUncommon),
            counterRare: ((d.ScrollRarity == 'Rare') ? prevState.counterRare + 1 : prevState.counterRare),
            counterEpic: ((d.ScrollRarity == 'Epic') ? prevState.counterEpic + 1 : prevState.counterEpic),
            counterLegendary: ((d.ScrollRarity == 'Legendary') ? prevState.counterLegendary + 1 : prevState.counterLegendary)
          
          }));
        } else if (d.OpenedMisteryBoxLevel == 9){
          getCountMbNine(prevState => ({
            counterNone: ((d.ScrollDropped == false) ? prevState.counterNone + 1 : prevState.counterNone),
            counterCommon: ((d.ScrollRarity == 'Common') ? prevState.counterCommon + 1 : prevState.counterCommon),
            counterUncommon: ((d.ScrollRarity == 'Uncommon') ? prevState.counterUncommon + 1 : prevState.counterUncommon),
            counterRare: ((d.ScrollRarity == 'Rare') ? prevState.counterRare + 1 : prevState.counterRare),
            counterEpic: ((d.ScrollRarity == 'Epic') ? prevState.counterEpic + 1 : prevState.counterEpic),
            counterLegendary: ((d.ScrollRarity == 'Legendary') ? prevState.counterLegendary + 1 : prevState.counterLegendary)
          
          }));
        } else if (d.OpenedMisteryBoxLevel == 10){
          getCountMbTen(prevState => ({
            counterNone: ((d.ScrollDropped == false) ? prevState.counterNone + 1 : prevState.counterNone),
            counterCommon: ((d.ScrollRarity == 'Common') ? prevState.counterCommon + 1 : prevState.counterCommon),
            counterUncommon: ((d.ScrollRarity == 'Uncommon') ? prevState.counterUncommon + 1 : prevState.counterUncommon),
            counterRare: ((d.ScrollRarity == 'Rare') ? prevState.counterRare + 1 : prevState.counterRare),
            counterEpic: ((d.ScrollRarity == 'Epic') ? prevState.counterEpic + 1 : prevState.counterEpic),
            counterLegendary: ((d.ScrollRarity == 'Legendary') ? prevState.counterLegendary + 1 : prevState.counterLegendary)
          
          }));
        }
        
      });


    })
    .catch(error => console.error(`Error: ${error}`))

}, []);
  
  const dataMb = {
    datasets: [{
        label: 'No Mistery Box',
        data: MbZero.data,
        spanGaps: true,
        backgroundColor: '#bbc8d4',
        pointRadius: 6,
        pointStyle: 'triangle'
    },
    {
        label: 'lvl1',
        data: MbOne.data,
        spanGaps: true,
        backgroundColor: '#414948',
        pointRadius: 6,
        pointStyle: 'triangle'
    },
    {
        label: 'lvl2',
        data: MbTwo.data,
        spanGaps: true,
        backgroundColor: '#8def94',
        pointRadius: 6,
        pointStyle: 'triangle'
    },
    {
        label: 'lvl3',
        data: MbThree.data,
        spanGaps: true,
        backgroundColor: '#2d82fa',
        pointRadius: 6,
        pointStyle: 'triangle'
    },
    {
      label: 'lvl4',
      data: MbFour.data,
      spanGaps: true,
      backgroundColor: '#ca2dfa',
      pointRadius: 6,
      pointStyle: 'triangle'
    },
    {
      label: 'lvl5',
      data: MbFive.data,
      spanGaps: true,
      backgroundColor: '#faaf2d',
      pointRadius: 6,
      pointStyle: 'triangle'
    },
    {
      label: 'lvl6',
      data: MbSix.data,
      spanGaps: true,
      backgroundColor: '#f6fa2d',
      pointRadius: 6,
      pointStyle: 'triangle'
    },
    {
      label: 'lvl7',
      data: MbSeven.data,
      spanGaps: true,
      backgroundColor: '#fa2d75',
      pointRadius: 6,
      pointStyle: 'triangle'
    },
    {
      label: 'lvl8',
      data: MbEight.data,
      spanGaps: true,
      backgroundColor: '#8020ee',
      pointRadius: 6,
      pointStyle: 'triangle'
    },
    {
      label: 'lvl9',
      data: MbNine.data,
      spanGaps: true,
      backgroundColor: '#11ead5',
      pointRadius: 6,
      pointStyle: 'triangle'
    },
    {
      label: 'lvl10',
      data: MbTen.data,
      spanGaps: true,
      backgroundColor: '#098502',
      pointRadius: 6,
      pointStyle: 'triangle'
    }
]}

  const dataEff = {
    datasets: [{
        label: 'Walker',
        data: EffWalker.data.sort((a, b) => a.y - b.y),
        spanGaps: true,
        backgroundColor: '#087df2',
        pointRadius: 5,
        pointStyle: 'rectRounded',
        showLine: true,
        borderColor: '#087df2',
        borderWidth: 1
    },
    {
        label: 'Jogger',
        data: EffJogger.data.sort((a, b) => a.y - b.y),
        spanGaps: true,
        backgroundColor: '#00fcdf',
        pointRadius: 5,
        pointStyle: 'rectRounded',
        showLine: true,
        borderColor: '#00fcdf',
        borderWidth: 1
    },
    {
        label: 'Runner',
        data: EffRunner.data,
        spanGaps: true,
        backgroundColor: '#b38bee',
        pointRadius: 5,
        pointStyle: 'rectRounded',
        showLine: true,
        borderColor: '#b38bee',
        borderWidth: 1
        
    },
    {
        label: 'Trainer',
        data: EffTrainer.data,
        spanGaps: true,
        backgroundColor: '#532dfa',
        pointRadius: 5,
        pointStyle: 'rectRounded',
        showLine: true,
        borderColor: '#532dfa',
        borderWidth: 1
    }
    ]
  }

const dataRes = {
  datasets: [{
      label: 'Resilience vs. Durability/Energy',
      data: Res.data.sort((a, b) => a.y - b.y),
      spanGaps: true,
      backgroundColor: '#323be5',
      pointRadius: 5,
      pointStyle: 'circle',
      showLine: true,
      borderColor: '#323be5',
      borderWidth: 1
  }
]
}

const dataTypes = {
  labels: ['Walker', 'Jogger', 'Runner', 'Trainer'],
  datasets: [
    {
      label: '# of Solana sneakers',
      data: [CountWalkerSol.counter, CountJoggerSol.counter, CountRunnerSol.counter, CountTrainerSol.counter],
      backgroundColor: 'rgba(187, 99, 255, 0.2)',
      borderColor: '#63aeff',
      borderWidth: 1,
    },
    {
      label: '# of BNB sneakers',
      data: [CountWalkerBnb.counter, CountJoggerBnb.counter, CountRunnerBnb.counter, CountTrainerBnb.counter],
      backgroundColor: 'rgba(236, 227, 133, 0.765)',
      borderColor: '#898d1b',
      borderWidth: 1,
    },
  ],
};

const dataScrolls = {
  labels: ['MB lvl1', 'MB lvl2', 'MB lvl3', 'MB lvl4', 'MB lvl5', 'MB lvl6', 'MB lvl7', 'MB lvl8', 'MB lvl9', 'MB lvl10'],
  datasets: [
    {
      label: 'No Scroll',
      data: [CountMbOne.counterNone, CountMbTwo.counterNone, CountMbThree.counterNone, CountMbFour.counterNone, CountMbFive.counterNone, CountMbSix.counterNone, CountMbSeven.counterNone, CountMbEight.counterNone, CountMbNine.counterNone, CountMbTen.counterNone],
      backgroundColor: 'rgb(194, 194, 195)',
    },
    {
      label: 'Common Scroll',
      data: [CountMbOne.counterCommon, CountMbTwo.counterCommon, CountMbThree.counterCommon, CountMbFour.counterCommon, CountMbFive.counterCommon, CountMbSix.counterCommon, CountMbSeven.counterCommon, CountMbEight.counterCommon, CountMbNine.counterCommon, CountMbTen.counterCommon],
      backgroundColor: 'rgb(81, 81, 81)',
    },
    {
      label: 'Uncommon Scroll',
      data: [CountMbOne.counterUncommon, CountMbTwo.counterUncommon, CountMbThree.counterUncommon, CountMbFour.counterUncommon, CountMbFive.counterUncommon, CountMbSix.counterUncommon, CountMbSeven.counterUncommon, CountMbEight.counterUncommon, CountMbNine.counterUncommon, CountMbTen.counterUncommon],
      backgroundColor: 'rgb(71, 206, 73)',
    },
    {
      label: 'Rare Scroll',
      data: [CountMbOne.counterRare, CountMbTwo.counterRare, CountMbThree.counterRare, CountMbFour.counterRare, CountMbFive.counterRare, CountMbSix.counterRare, CountMbSeven.counterRare, CountMbEight.counterRare, CountMbNine.counterRare, CountMbTen.counterRare],
      backgroundColor: 'rgb(46, 163, 241)',
    },
    {
      label: 'Epic Scroll',
      data: [CountMbOne.counterEpic, CountMbTwo.counterEpic, CountMbThree.counterEpic, CountMbFour.counterEpic, CountMbFive.counterEpic, CountMbSix.counterEpic, CountMbSeven.counterEpic, CountMbEight.counterEpic, CountMbNine.counterEpic, CountMbTen.counterEpic],
      backgroundColor: 'rgb(156, 46, 241)',
    },
    {
      label: 'Legendary Scroll',
      data: [CountMbOne.counterLegendary, CountMbTwo.counterLegendary, CountMbThree.counterLegendary, CountMbFour.counterLegendary, CountMbFive.counterLegendary, CountMbSix.counterLegendary, CountMbSeven.counterLegendary, CountMbEight.counterLegendary, CountMbNine.counterLegendary, CountMbTen.counterLegendary],
      backgroundColor: 'rgb(241, 134, 46)',
    },
  ],
};

  return (
    <div className="home-components">
        <Outlet />

        <Container fluid="sm">
        <Row className='align-items-center justify-content-center'>
          <Col className="backgroundAnimated" xs={12} md={12} lg={12}>
            <h2 className="text-center welcomeTitle">COMMUNITY DATA</h2>
          </Col>
        </Row>

        <Row className='align-items-center justify-content-center'>
          <Col xs='auto' md='auto' lg='auto'>
            <h5>Choose the realm:</h5>
          </Col>
            
          <Col xs='auto' md='auto' lg='auto'>
            <ButtonChain handler={statusHandlerSol} icon='sol' buttonStyle='sol'/>
          </Col>

          <Col xs='auto' md='auto' lg='auto'>
            <ButtonChain handler={statusHandlerBnb} icon='bsc' buttonStyle='bsc'/>
          </Col>

          <Col xs='auto' md='auto' lg='auto'>
            <ButtonChain handler={statusHandlerEth} icon='question' buttonStyle='eth'/>
          </Col>

        </Row>

        <Row className='align-items-center justify-content-center mt-5'>
          <Col xs='auto' md='auto' lg='auto'>
            <CoinPrice
                logo="https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png"
                priceUSD = {Chain.GST_USD}
                priceKZT = {Chain.GST_KZT}
                name='GST'/>
          </Col>

          <Col xs='auto' md='auto' lg='auto'>
            <CoinPrice
                logo={Chain.chainLogo}
                priceUSD = {Chain.ChainPrice_USD}
                priceKZT = {Chain.ChainPrice_KZT}
                name={Chain.nameChain}/>
          </Col>

          <Col xs='auto' md='auto' lg='auto'>
            <CoinPrice
                logo="https://s2.coinmarketcap.com/static/img/coins/64x64/18069.png"
                priceUSD = {Chain.GMT_USD}
                priceKZT = {Chain.GMT_KZT}
                name='GMT'/>
          </Col>
        </Row>

        <Row className='align-items-center justify-content-center mt-3'>
        <Col xs='auto' md='auto' lg='auto'>
            <p className="font-italic-text">CoinMarketcap data is updated every 30 mins. Last updated: {coinPrices.last_updated.slice(0, 10) + ` ${coinPrices.last_updated.slice(11, 19)}`}</p>
          </Col>
        </Row>

        <Row className='align-items-center justify-content-center mt-5'>
        <Col xs='auto' md='auto' lg='auto'>
            <p>Following charts are derived from added results</p>
          </Col>
        </Row>

        <Row className='align-items-center justify-content-center mt-2 mb-5'>

          <Col md={10} lg={10}>
            <Scatter options={optionsMb} data={dataMb}/>
          </Col>
          
        </Row>

        <Row className='align-items-center justify-content-center mt-5 mb-5'>
          
          <Col md={10} lg={10}>
            <Bar options={optionsScrolls} data={dataScrolls}/>
          </Col>
        </Row>

        <Row className='align-items-center justify-content-center mt-5 mb-5'>
          
          <Col md={10} lg={10}>
            <Scatter options={optionsEff} data={dataEff}/>
          </Col>
        </Row>

        <Row className='align-items-center justify-content-center mt-5 mb-5'>
          <Col md={10} lg={10}>
            <Scatter options={optionsRes} data={dataRes}/>
          </Col>
        </Row>

        <Row className='align-items-center justify-content-center mt-5 mb-5'>
            <Col md={6} lg={6}>
              <Radar data={dataTypes} options={{
          responsive: true,
          maintainAspectRatio: true
        }}/>
            </Col>
        </Row>
        
        <Row className='align-items-center justify-content-center mt-5 mb-5'>
          
            <span className="text-center"> © uniQ | <a href="https://twitter.com/medeu_amangeldi" target="_blank">Contact Me</a> </span> 
       
        </Row >

        </Container>
          
    </div>
    
  );
};

export default Home;