import { ICreateService } from '../../../../services/_interfaces/create-service.interface';
import { errorHandler } from '../../../../utils/error-handler';
import { ICategory } from '../interfaces/category.interface';

export const CreateCategoryService: ICreateService<ICategory> =
  (repo) =>
  (response, { name, description }) =>
    repo
      .create({ name, description })
      .then((category) => response.status(201).json(category))
      .catch((error) => {
        const [status, message] = errorHandler(error);
        return response.status(status).json({ error: message });
      });
