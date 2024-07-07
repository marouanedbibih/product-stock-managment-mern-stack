import { Router } from 'express';
import { getAllCategoriesApi, getCategoryByIdApi, createCategoryApi, updateCategoryApi, deleteCategoryApi } from '../controllers/CategoryController';

const categoryRouter = Router();

categoryRouter.get('/', getAllCategoriesApi);
categoryRouter.get('/:id', getCategoryByIdApi);
categoryRouter.post('/', createCategoryApi);
categoryRouter.put('/:id', updateCategoryApi);
categoryRouter.delete('/:id', deleteCategoryApi);

export default categoryRouter;
