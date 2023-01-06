import { IFindAllService } from '../../../_interfaces/find-all-service.interface';
import { errorHandler } from '../../../../utils/error-handler';
import { ISpecification } from '../interfaces/specification.interface';

export const FindAllSpecificationService: IFindAllService<ISpecification> = (repo) => (response, where) =>
  repo
    .findAll(where)
    .then((specification) => response.json(specification))
    .catch((error) => {
      const [status, message] = errorHandler(error);
      return response.status(status).json({ error: message });
    });
