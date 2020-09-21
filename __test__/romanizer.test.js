import {transform} from "../src/romanizer";

describe('romanizer', () => {
    it('should output X when input 10', () => {
        const output = transform(10);

        expect(output).toEqual("X");
    })
})