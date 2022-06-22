expect.extend({
  toBeWithinRange(actual, min, max) {
    if (typeof actual !== "number") {
      throw new Error("Actual data must be a number");
    }

    const pass = actual >= min && actual <= max;

    if (pass) {
      return {
        pass,
        message: () =>
          `expected ${actual} not to be within range (${min}..${max})`,
      };
    }

    return {
      pass,
      message: () => `expected ${actual} to be within range (${min}..${max})`,
    };
  },

  setContaining(actual, expected) {
    if (!(actual instanceof Set)) {
      throw new Error("Actual data must be a Set");
    }

    const pass = expected.every((item) => actual.has(item));

    if (pass) {
      return {
        pass,
        message: () => `expected Set not to contain ${expected.join(", ")}`,
      };
    }

    return {
      pass,
      message: () => `expected Set to contain ${expected.join(", ")}`,
    };
  },
});
