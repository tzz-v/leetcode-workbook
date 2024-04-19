type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

const expect = (val: any): ToBeOrNotToBe => ({
  toBe(newVal) {
    if (val !== newVal) throw new Error('Not Equal');
    return true;
  },
  notToBe(newVal) {
    if (val === newVal) throw new Error('Equal');
    return true;
  },
});

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
