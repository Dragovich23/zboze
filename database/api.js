const axios = require('axios');
(async () => {    
    const api_key = '20aee78baf674ac:bz6y38t4nonomdi'
    const response = await axios.get(`https://api.tradingeconomics.com/country/mexico?c=${api_key}`)
    console.log(response.data)
})()
