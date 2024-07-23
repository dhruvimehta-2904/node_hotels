const express = require('express')
const app = express()

const db = require('./database');

const bodyParser= require('body-parser');
app.use(bodyParser.json());

// const person = require('./person');
// const menuitem = require('./menu');


app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.post('/person', async (req,res)=>{
//    try
//    {
//       const data = req.body; //bodyparser
//       const newPerson = new person(data);
//       const response = await newPerson.save();
//       console.log('data saved');
//       res.status(200).json(response);
//    }
//    catch(error){
//        console.log(error);
//       res.status(500).json({error: 'internal server probllem' });
//    }
// });

// app.get('/person', async (req,res) =>{
//   try{
//        const data= await person.find();// read data
//        console.log('data saved');
//        res.status(200).json(data);
//   }catch(error){
//     console.log(error);
//       res.status(500).json({error: 'internal server probllem' });

//   }
// })

// app.get('/person/:workType', async (req,res)=>
// {
//   try{
//     const workType = req.params.workType; //extract the work type from the url
//     if(workType == 'chef' ||workType == 'waiter'|| workType == 'manager'){
//       const response = await person.find({work:workType});
//       console.log("response fetched");
//       res.status(200).json(response);

//     }else
//     {
//       res.status(404).json({error: 'invalid worktype'});
//     }
//   }
// catch(error)
//   {
//     console.log(error);
//     res.status(500).json({error: 'internal server probllem' });

//   }
// })

const personRoutes = require('./routes/personRoutes.js');
app.use('/person', personRoutes);

app.listen(3000, ()=>
{
    console.log("listening on port number");
})