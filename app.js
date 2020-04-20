const express = require('express');
const app = express();
const router = express.Router();

const port = 8080;

router.use(function (req,res,next) {
    console.log('/' + req.method);
    next();
  });

router.get('/', function(req,res){
    res.json({title:'Hello world'});
});

app.use('/', router);

app.listen(port, function () {
    console.log('Example app listening on port 8080!')
})

module.exports = app;
