declare global {
  namespace jest {
    interface Matchers<R, T> {
      toBeWithinRange(min: number, max: number): R;
      setContaining(expected: T extends Set<infer V> ? V[] : never): R;
    }

    interface Expect {
      setContaining<T>(expected: T[]): Set<T>;
    }

    interface ExpectExtendMap {
      toBeWithinRange(
        this: jest.MatcherContext,
        actual: unknown,
        min: number,
        max: number
      ): jest.CustomMatcherResult;

      setContaining<T>(
        this: jest.MatcherContext,
        actual: unknown,
        expected: T[]
      ): jest.CustomMatcherResult;
    }
  }
}

export {};
