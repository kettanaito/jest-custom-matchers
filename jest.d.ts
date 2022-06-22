import { MatcherFunction } from "expect";

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
      toBeWithinRange: MatcherFunction<[min: number, max: number]>;
      setContaining: MatcherFunction<[unknown[]]>;
    }
  }
}

export {};
