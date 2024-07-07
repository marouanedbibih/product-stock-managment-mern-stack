import { Request, Response } from "express";
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "../services/CategoryService";


export const getAllCategoriesApi = async (req: Request, res: Response) => {
    try {
        const categories = await getAllCategories();
        return res.status(200).json(categories);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        } else {
            return res.status(500).json({ message: "Une erreur inconnue s'est produite" });
        }
    }
}

export const getCategoryByIdApi = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const category = await getCategoryById(id);
        return res.status(200).json(category);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        } else {
            return res.status(500).json({ message: "Une erreur inconnue s'est produite" });
        }
    }
}

export const createCategoryApi = async (req: Request, res: Response) => {
    try {
        const category = req.body;
        const newCategory = await createCategory(category);
        return res.status(201).json({ message: "Catégorie créée avec succès", category: newCategory });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        } else {
            return res.status(500).json({ message: "Une erreur inconnue s'est produite" });
        }
    }
}

export const updateCategoryApi = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const category = req.body;
        const updatedCategory = await updateCategory(id, category);
        return res.status(200).json({ message: "La catégorie a été mise à jour", category: updatedCategory });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        } else {
            return res.status(500).json({ message: "Une erreur inconnue s'est produite" });
        }
    }
}

export const deleteCategoryApi = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await deleteCategory(id);
        return res.status(204).json({ message: "La catégorie a été supprimée"});
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        } else {
            return res.status(500).json({ message: "Une erreur inconnue s'est produite" });
        }
    }
}