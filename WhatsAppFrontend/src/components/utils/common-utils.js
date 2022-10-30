import { optionGroupUnstyledClasses } from "@mui/base";

export const FormateDate=(date)=>{
   const hours=new Date(date).getHours();
   const minutes=new Date(date).getMinutes();
   return `${hours<10?`0`+hours:hours}:${minutes<10?`0`+minutes:minutes}`
}


export const downloadMedia=(e,originalImage)=>{
   e.preventDefault()
   try{
      fetch(originalImage).then(res=>res.blob()).then(blob=>{
         const url=window.URL.createObjectURL(blob)
         const a=document.createElement('a')
         a.style.display="none";
       

         a.href=url;
         const nameSplit=originalImage.split("/")
         const dublicateName=nameSplit.pop();
         a.download=""+dublicateName+""
         document.body.appendChild(a);
         a.click();
         window.URL.revokeObjectURL(url)


      }).catch((e)=>{
         console.log("Image not downloaded",e.message)
      })

   }catch(e){
      console.log(e.message)
   }
}