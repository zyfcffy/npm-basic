import {plus} from "../src/calculator";

describe('calculator', () => {
    it('should return 3 when 1 plus 2', () => {
        const formatted = plus(1, 2);

        expect(formatted).toEqual(3);
    });
});