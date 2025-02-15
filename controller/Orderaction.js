import { OrderModel } from "../model/OrderModel.js"


export const acceptorder  = async(req, res) =>{
    try {
            const {id} = await req.body;

            const order = await OrderModel.findById(id);

            order.status ="completed";

            await order.save();

            return res.json({
                success: true,
                message: "Order accepted successfully"
            })

    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}