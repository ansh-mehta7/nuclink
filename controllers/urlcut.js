const shortid = require("shortid");
const URL= require("../models/urlSchema")


exports.urlhander= async (req,res)=>{
    try{

       if (!req.body){
        return res.status(400).json({
            message:`bad request please provide url`
        })
       }


       const cutid=shortid(7);
       console.log(cutid)

       const url=req.body.url;
       const savedshortedurl= await URL.create({
        shortId:cutid,
          homeurl:req.body.url,
          noOfClicks:[]
       })
       res.status(200).json({
        message: 'Shortened URL created successfully',
        data: savedshortedurl
    })
 } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
}
exports.geturlfromshortID= async (req,res)=>{
    try{
         const shortid =req.params.id;
         const homeurl=await URL.findOne({shortId:shortid})
            if(!homeurl){
                return res.status(404).json({
                    message:`url not found`
                })
            }else {
                try {
                    console.log(shortid)
                    await URL.updateOne({ shortId: shortid }, { $push: { noOfClicks: Date.now() } });
                    res.redirect(homeurl.homeurl);
                } catch (error) {
                    console.log(error);
                    res.status(500).send('Error updating click count');
                }
            }

    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
}
exports.analyticsforshortID= async (req,res)=>{
    try{
      // i want to display thre number of clicks for a particular shortid
    const shortid =req.params.id;
    console.log(shortid)
    const data =await URL.findOne({shortId:shortid});
    res.status(200).json({
        clicktimes:data.noOfClicks.length
    })
    
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
}
