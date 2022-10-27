import message from "../model/message.js";
import conversation from "../model/conversation.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new message(req.body);
   
    await conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text });
    await newMessage.save();
    return res.status(200).json("Message added successfully");
  } catch (e) {
    return res.json("Message Error");
  }
};

export const getMessages=async(req,res)=>{
    try {
        const messages = await message.find({ conversationId: req.params.id });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json(error);
    }
}
