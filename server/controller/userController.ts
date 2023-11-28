import { Request, Response } from "express"
import { Services } from "../mongoos/servicesModel";



const userController = () => {
    const getAllWorks = async (req:Request,res:Response) => {
         try {
           console.log("called");
           const data = await Services.find();
           console.log(data);
           res.json({ message: "got it", data });
         } catch (e) {
           console.log(e);
         }
    }

    return {getAllWorks}
}


export default userController