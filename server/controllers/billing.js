const billing = require('../model/billing');


exports.billing = async (req,res,next)=>{


    let id = req.body.data.userId;


   let bill = await getBillingDetails(id);
    
    const user= await User.findAll({
        where: { id: req.body.data.userId }
    });

    

    const response = {
        status:200,
        data: bill
    }

    console.log(response);

    res.json(response);
}

async function getBillingDetails(user_id) {
    
}
