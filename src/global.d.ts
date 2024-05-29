type ReducerState<T> = {
  isLoading: boolean;
  error: string | null;
  success: T;
};
