import { model, Schema } from "mongoose";
import CategoryType from "../types/CategoryType";


const CategorySchema = new Schema({
    id: { type: String, required: false },
    name: { type: String, required: true },
    description: { type: String, required: true },
    productsList: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});

const Category = model<CategoryType>('Category', CategorySchema);

export default Category;