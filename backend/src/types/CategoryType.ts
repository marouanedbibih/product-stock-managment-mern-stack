import ProductType from "./ProductType";

interface CategoryType extends Document{
    id: string;
    name: string;
    description: string;
    productsList?: ProductType[];
}

export default CategoryType;