import express, { Request, Response } from 'express'

import { Services } from '../mongoose/serviceModel'
import { Orders } from '../mongoose/ordersModer'


const userRouter = () => {
    const router = express.Router()

    router.get('/get-all-services', async (req: Request, res: Response) => {
        try {
            const data = await Services.find()
            if (data.length) {
                res.json({message:'got it',ok:true,data})
            } else {
                res.json({message:'err',ok:false})
            }
            
        } catch (e:any) {
            console.log(e.message)
        }
    })

    router.post('/save-order', async (req: Request, res: Response) => {
        console.log('called saving')
        try {
            const data = req.body
            console.log(data)
            const response = await Orders.create(data)
            res.json({message:'got it',response})
        } catch (err:any) {
            console.log(err.message)
        }
    })


    return router
}

export default userRouter