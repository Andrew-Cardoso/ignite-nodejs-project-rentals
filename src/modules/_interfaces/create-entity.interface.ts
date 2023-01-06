export type ICreateEntity<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
