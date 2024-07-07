import Category from "../models/CategoryModel";
import CategoryType from "../types/CategoryType";


export const getAllCategories = async () => {
    return Category.find();
};

export const getCategoryById = async (id: string) => {
    return Category.findById(id);
};

export const createCategory = async (category: CategoryType) => {
    return Category.create(category);
};

export const updateCategory = async (id: string, category: CategoryType) => {
    return Category.findByIdAndUpdate(id, category, { new: true });
}

export const deleteCategory = async (id: string) => {
    return Category.findByIdAndDelete(id);
}

