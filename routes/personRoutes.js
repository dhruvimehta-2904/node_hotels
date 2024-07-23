const express = require('express');
// const person = require('./person.js');
const person = require('./../person.js');
const router = express.Router();

router.post('/', async (req,res)=>{
    try
    {
       const data = req.body; //bodyparser
       const newPerson = new person(data);
       const response = await newPerson.save();
       console.log('data saved');
       res.status(200).json(response);
    }
    catch(error){
        console.log(error);
       res.status(500).json({error: 'internal server probllem' });
    }
 });

 router.get('/', async (req,res) =>{
    try{
         const data= await person.find();// read data
         console.log('data saved');
         res.status(200).json(data);
    }catch(error){
      console.log(error);
        res.status(500).json({error: 'internal server probllem' });
  
    }
  })

  router.get('/:workType', async (req,res)=>
    {
      try{
        const workType = req.params.workType; //extract the work type from the url
        if(workType == 'chef' ||workType == 'waiter'|| workType == 'manager'){
          const response = await person.find({work:workType});
          console.log("response fetched");
          res.status(200).json(response);
    
        }else
        {
          res.status(404).json({error: 'invalid worktype'});
        }
      }
    catch(error)
      {
        console.log(error);
        res.status(500).json({error: 'internal server probllem' });
    
      }
    })
    //update put
router.put('/:id', async (req,res) =>{
    try{
        const personId = req.params.id;// extract id fro url paramaeter
        const updatedPersonData = req.body;// updated data from the person
        const response = await person.findByIdAndUpdate(personId,updatedPersonData, {
            new: true,//retur the updated document
            runValidators:true  // run mongose validators like name is required

        })
        if(!response){
            return res.status(404).json({error: 'person not found'});
        }

        console.log('data updated');
        res.status(200).json(response);
       
    }catch(error){
        console.log(error);
        res.status(500).json({error: 'internal server probllem' });
    
    }
    

})

router.delete('/:id', async (req,res)=>{
try{
    const personId = req.params.id;// extract id fro url paramaeter
    const response = await person.findByIdAndDelete(personId);
    if(!response){
        return res.status(404).json({error: 'person not found'});
    }

    console.log('data deleted');
    res.status(200).json({message: 'person deleted sucessfully'});

}catch(error){
    console.log(error);
    res.status(500).json({error: 'internal server probllem' });

} 
})

    module.exports= router;
    
 

 