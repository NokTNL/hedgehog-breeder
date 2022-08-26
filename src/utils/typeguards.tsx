interface ErrorWithCause extends Error {
  cause: Error;
}

export const isErrorWithCause = (x: unknown): x is ErrorWithCause => {
  return x instanceof Error && x.cause instanceof Error;
};
