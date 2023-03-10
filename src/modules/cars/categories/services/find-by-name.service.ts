import { IFindByNameService } from '../../../_interfaces/find-by-name-service.interface';
import { errorHandler } from '../../../../utils/error-handler';
import { ICategory } from '../interfaces/category.interface';

export const FindByNameCategoryService: IFindByNameService<ICategory> = (repo) => async (response, name) =>
  !name
    ? response.status(400).json({ error: 'Name is required' })
    : repo
        .findByName(name)
        .then((category) => response.json(category))
        .catch((error) => {
          const [status, message] = errorHandler(error);
          return response.status(status).json({ error: message });
        });
