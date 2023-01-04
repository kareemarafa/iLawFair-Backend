export interface PaginationObjectInterface<T> {
  statusCode: number;
  data: T[];
  count: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  lastPage: number;
}
