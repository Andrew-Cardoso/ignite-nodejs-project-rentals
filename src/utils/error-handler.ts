type ErrorTuple = [number, string];

const errorTypes: Record<string, (errors: Record<string, unknown>[]) => ErrorTuple> = {
  default: () => [500, 'Internal server error'],
  SequelizeUniqueConstraintError: () => [409, 'Category already exists'],
  SequelizeValidationError: (errors) => [400, errors?.map((e) => e?.message).join('\n')],
};

type ErrorTypes = keyof typeof errorTypes;

type ErrorHandler = (error: Record<string, unknown>) => ErrorTuple;

export const errorHandler: ErrorHandler = (error) => {
  const errorType = <ErrorTypes>(<ErrorTypes>error.name in errorTypes ? error.name : 'default');
  return errorTypes[errorType](error.errors as Record<string, unknown>[]);
};
