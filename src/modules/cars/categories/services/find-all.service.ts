import { IFindAllService } from '../../../../services/_interfaces/find-all-service.interface';
import { errorHandler } from '../../../../utils/error-handler';
import { ICategory } from '../interfaces/category.interface';

export const FindAllCategoryService: IFindAllService<ICategory> = (repo) => (response, where) =>
  repo
    .findAll(where)
    .then((category) => response.json(category))
    .catch((error) => {
      const [status, message] = errorHandler(error);
      return response.status(status).json({ error: message });
    });
