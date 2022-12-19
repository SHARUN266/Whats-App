import User from "../model/user.js"
export const addUser=async(req,res)=>{
      try{
      let exist= await User.findOne({uid:req.body.uid})
      if(exist){
        res.status(200).json({msg:"user already exist"})
      }else{
          
          const newUser=new User(req.body);
          await newUser.save()
          res.status(200).json(newUser)
      }
      }catch(e){
        res.status(404).json({msg:e.message})
      }
}


export const getUser=async(req,res)=>{
    try{
        const users=await User.find({})
        return res.status(200).json(users)

    }catch(e){
        res.status(404).json({msg:e.message})
    }
}

