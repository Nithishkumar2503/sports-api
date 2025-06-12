

export const erroHandler=(err,req,res,nex)=>{
  res.status(500).json({error:"Something went wrong! "+err.stack})
}