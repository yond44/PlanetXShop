import merchants from "../model/merchantmodel.js";
import jwt from "jsonwebtoken";


export const refreshToken = async(req,res) =>{
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(204)
        const merchant = await merchants.findAll({
            where:{
                refresh_token : refreshToken
            }
        });
        if(!merchant[0]) return res.sendStatus(204);
            
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
        if(err) return res.sendStatus(403);
        const userId = merchant[0].id;
        const username = merchant[0].username;
        const password = merchant[0].password;
        const name = merchant[0].name;
        const address = merchant[0].address;
        const phone_number = merchant[0].phone_number;
       
      
        const accessToken = jwt.sign({userId,username,password,name,address,phone_number}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1h'
        });
        res.json({ accessToken })
    });
    } catch (error) {
        res.sendStatus(400);

    }
}