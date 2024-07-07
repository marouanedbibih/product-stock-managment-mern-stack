import { model, Schema } from "mongoose";
import ProductType from "../types/ProductType";


const ProductSchema = new Schema({
    id: { type: String, required: false },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
});


const Product = model<ProductType>('Product', ProductSchema);
export default ProductSchema;
