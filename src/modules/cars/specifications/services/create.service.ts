import { ICreateService } from '../../../../services/_interfaces/create-service.interface';
import { errorHandler } from '../../../../utils/error-handler';
import { ISpecification } from '../interfaces/specification.interface';

export const CreateSpecificationService: ICreateService<ISpecification> =
  (repo) =>
  (response, { name, description }) =>
    repo
      .create({ name, description })
      .then((specification) => response.status(201).json(specification))
      .catch((error) => {
        const [status, message] = errorHandler(error);
        return response.status(status).json({ error: message });
      });
