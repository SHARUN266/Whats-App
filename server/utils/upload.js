
import multer from "multer"
import {GridFsStorage} from "multer-gridfs-storage";


const storage=new GridFsStorage({
    url:`mongodb://127.0.0.1:27017/whatsappclone`, options:{useNewUrlParser:true},file:(request,file)=>{
        const match=["image/png","image/jpeg"];
        if(match.indexOf(file.mimeType)===-1){
            return `${Date.now()} file ${file.originalname}`
        }

        return {
            buckename:"photos",
            filename:`${Date.now()}file${file.originalname}`
        }
    }
})
export default multer({storage});