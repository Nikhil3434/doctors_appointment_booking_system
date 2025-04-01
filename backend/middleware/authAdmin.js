import jwt from "jsonwebtoken"
// admin auth
const authAdmin = async() =>{
    try{
       
         const {atoken} = req.headers
         if(!atoken){
            return res.json({success:false,message:'NOt authorized login again'})
         }
         const token_decode = jwt.verify(atoke,process.env.JWT_SECRET)
         if(token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:'NOt authorized login again'})
         }
         
         next()

    }catch(error){
        onsole.log(error)
        res.json({success:false,message:error.message})
    }
}
export default authAdmin