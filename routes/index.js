var express = require('express');
var router = express.Router();
var axios = require('axios')
var code = ""
/* GET home page. */

router.post('/access_token', async function(req, res, next) {
    this.code = req.body.code;
    this.client_id = req.body.client_id;
    this.client_secret = req.body.client_secret;
    var api_response = await getAccessToken();
    console.log("..........",api_response)
    res.send(api_response);
});

async function getAccessToken() {
    const url = `https://github.com/login/oauth/access_token`
    try{
      // if(!this.code){
      //   return("Code missing!")
      // }
      const response = await axios.post(url,{
        client_id: this.client_id,
        client_secret: this.client_secret,
        code: this.code,
      });
      //console.log(response.data)
      if(response.data){
        return response.data;
      }else{
        return "Error"
      }
      
    }catch (error){
      return error;
    }
    
}

module.exports = router;
