var express = require('express');
var app = express();

var port = process.env.PORT || 3001;

let per = [
    {Name: 'arun', Age: 21},
    {Name: 'jack', Age: 22},
    {Name: 'moorthi', Age: 23},
    {Name: 'tamil', Age: 24},
	{Name: 'natu', Age: 25},
	{Name: 'arun1', Age: 21},
    {Name: 'jack1', Age: 22},
    {Name: 'moorthi1', Age: 23},
    {Name: 'tamil1', Age: 24},
	{Name: 'natu1', Age: 25},
	{Name: 'arun2', Age: 21},
    {Name: 'jack2', Age: 22},
    {Name: 'moorthi2', Age: 23},
    {Name: 'tamil2', Age: 24},
    {Name: 'natu2', Age: 25},
],
splitSize =3, 
size = per.length/splitSize, 
arrayset=[],
cur=0;
for(let i=0;i<size;i++) {
	let temp = i*splitSize;
    arrayset.push(per.slice(temp,temp+splitSize));
}

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


app.get('/', function(req, res) {
	// get that data from database
	cur=0;
	res.json(arrayset[cur]);
});

app.get('/next',function(req,res) {
	cur++;
	if(cur >= 0 && cur < size) {
		res.json(arrayset[cur]);
	} else {
		cur=size-1;
		res.json(arrayset[cur]);
	}
});

app.get('/pre',function(req,res) {
	cur--;
	if(cur > 0 && cur <= size) {
		res.json(arrayset[cur]);
	} else {
		cur=0;
		res.json(arrayset[cur]);
	}
});

app.listen(port,console.log("server started"));