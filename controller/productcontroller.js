import { ProductModel } from "../model/ProductModel.js"

export const addproducts = async(req,res)=>{
    try {

        const {producttitle,productprice,productdesc,producttype,productimage} = req.body;
        const formattedImages = productimage.map(img => ({ imageurl: img }));
        await ProductModel.create({
            producttitle:producttitle,
            productprice:productprice,
            producttype:producttype,
            productdesc:productdesc,
            productimage:formattedImages
        })

        return res.json({
            success:true,
            message:"Product"
        })
    } catch (error) {
        return res.json({
            success: false,
            error: error
        })
    }
}
