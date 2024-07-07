import CategoryType from "./CategoryType";

interface ProductType extends Document{
    id: string;
    name: string;
    price: number;
    description: string;
    category?: CategoryType;
}

export default ProductType;