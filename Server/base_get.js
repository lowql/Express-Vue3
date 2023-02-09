const axios = require('axios');
// Make a request for a user with a given ID

const localRequest = axios.create({
    baseURL:'http://localhost:3000',
})

const postLogin = data => localRequest.post('/login',data);
const getLocal = url => localRequest(url)

// getLocal('/json').then((res)=>{
//     console.log(res.data);
// });

const data = {
    Account:"rucky-vemi",
    Password:"123456789"
}
postLogin(data).then((res)=>{
    console.log(res.config);
});

// axios.get('http://127.0.0.1:3000/json')
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });