const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
require('dotenv').config();

const mongoString = process.env.DATABASE_URL
const apiKey = process.env.API_KEY
const app = express();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json());
app.use('/api', routes)
app.use(
    express.urlencoded({ extended: true })
);

mongoose.connect(mongoString);

const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected!');
})

const axios = require('axios');
const Prices = require('./models/model-prices');

setInterval(async ()=>{
    let responseGstSol = null;
    let responseGstSolKzt = null;

    let UsdToKzt = null;

    let responseGstBsc = null;
    let responseSol = null;
    let responseBnb= null;
    let responseGmt = null;

    try {
        responseGstSol = await axios.get(`https://pro-api.coinmarketcap.com/v2/tools/price-conversion?id=16352&amount=1&convert=USD`, {
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
        }
        });

        responseGstSolKzt = await axios.get(`https://pro-api.coinmarketcap.com/v2/tools/price-conversion?id=16352&amount=1&convert=KZT`, {
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
        }
        });

        responseGstBsc = await axios.get(`https://pro-api.coinmarketcap.com/v2/tools/price-conversion?id=20236&amount=1&convert=USD`, {
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
        }
        });

        responseSol = await axios.get(`https://pro-api.coinmarketcap.com/v2/tools/price-conversion?id=5426&amount=1&convert=USD`, {
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
        }
        });

        responseBnb = await axios.get(`https://pro-api.coinmarketcap.com/v2/tools/price-conversion?id=1839&amount=1&convert=USD`, {
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
        }
        });

        responseGmt = await axios.get(`https://pro-api.coinmarketcap.com/v2/tools/price-conversion?id=18069&amount=1&convert=USD`, {
        headers: {
            'X-CMC_PRO_API_KEY': apiKey,
        }
        });

    } catch(ex) {
        // error
        // console.log(ex);
    }
    if (responseGstSol) {
        
        UsdToKzt = responseGstSolKzt.data.data.quote.KZT.price/responseGstSol.data.data.quote.USD.price;
        // success
        const data = new Prices({
            GST: {
                SOL: {
                    USD: responseGstSol.data.data.quote.USD.price,
                    KZT: responseGstSolKzt.data.data.quote.KZT.price
                },
                BSC: {
                    USD: responseGstBsc.data.data.quote.USD.price,
                    KZT: responseGstBsc.data.data.quote.USD.price*UsdToKzt
                }
            },
            SOL: {
                USD: responseSol.data.data.quote.USD.price,
                KZT: responseSol.data.data.quote.USD.price*UsdToKzt
            },
            BNB: {
                USD: responseBnb.data.data.quote.USD.price,
                KZT: responseBnb.data.data.quote.USD.price*UsdToKzt
            },
            GMT: {
                USD: responseGmt.data.data.quote.USD.price,
                KZT: responseGmt.data.data.quote.USD.price*UsdToKzt
            },
            Dollar: UsdToKzt,
            date_added: responseGstSol.data.data.last_updated
        })
    
        try {
            const dataToSave = await data.save();
            // res.status(200).json(dataToSave)
        }
        catch (error) {
            // res.status(400).json({message: error.message})
        }
    }
}, 1800000);

// listen port
const port = 3001;

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})