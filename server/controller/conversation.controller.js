import conversation from "../model/conversation.js";
export const newConversation=async(req,res)=>{

     try{
        let senderId=req.body.senderId;
        const receiveId=req.body.receiveId;
        const exist =await conversation.findOne({members:{$all:[senderId,receiveId]}});
        if(exist){
            return res.status(200).json("conversation already exists")
        }
        const newConversation=new conversation({
            members:[senderId,receiveId]
        })

        await newConversation.save();
        return res.status(200).json("conversation saved successfully")

     }catch(e){
        return res.status(404).json("Error",e.message)
     }
}