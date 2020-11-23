var axios = require('axios');

const path = 'http://localhost:3000/user';

const getData = async () => {
    const result = await axios.get('http://localhost:3000/user').then(res => res.data)
    // console.log(result)
}

getData();

exports.getData = getData;