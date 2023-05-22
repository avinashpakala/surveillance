
const service = require('../model/ServiceRequest');


exports.deleteServiceRequest = async(req,res,next)=>{

}

exports.markResolved = async(req,res,next)=>{

    const records =  await service.update(
        {
            resolved: true,
        },{
            where: { id: req.body.id }
        }

    );


    res.json(200);
}


exports.createServiceRequest = async (req,res,next)=> {
    const device = req.body.device;
    const description = req.body.description;
    const userId=req.body.userId
    const location  = req.body.location
    const priority = req.body.priority
    await service.create({
        device: device,
        description: description,
        userId:userId,
        location:location,
        priority:priority
    });
    res.json({status:'200'});
}


exports.getAllServiceRequests = async(req,res,next)=>{
    const records =  await service.findAll({
        where: { resolved: false }
    });
    let arr = records.map(el=>{
        return {
            id:el.id,
            userId:el.userId,
            device:el.device,
            description:el.description,
            dateCreated : el.createdAt,
            location:el.location,
            priority:el.priority}
    })

    res.json({status:'200',data:arr})

}
