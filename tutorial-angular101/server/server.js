var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

app.post('/post',function(req,res){

  var data = req.body;
  writeFile(data);


  res.send(data);
});
app.listen(3000,function(){
  console.log("Started on PORT 3000");
})



app.get('/get',function(req,res){

  var data = readFile();

  res.json(data)
  // res.json({name:1, value:1})
  // res.send({name:1, value:1});
})



function readFile(){

  const path = '../src/app/test.json'
  var json = null;
  try {
    if (fs.existsSync(path)) {
      // console.log('exists')
      json = JSON.parse(require('fs').readFileSync(path, 'utf8'));
      // console.log(json)
    }
  } catch(err) {
    console.error(err)
  }
  return json;

}


// writeAuthFile({test: 1});
function writeFile(data, success, fail) {
    var fs = require('fs');

    fs.writeFile('test.json', JSON.stringify(data), function(error) {
      if(error) {
        console.log('[write json]: ' + err);
          if (fail)
            fail(error);
      } else {
        console.log(JSON.stringify(data));
        console.log('[write json]: success');
          if (success)
            success();
      }
    });
  }