import * as utils from 'helpers/utils';

describe("helpers::utils", () => {
    describe("clsx", () => {
        test("should concat classnames separated by space", () => {
            const mockClsx = jest.fn().mockImplementation(utils.clsx);
            expect(mockClsx('class1', 'class2')).toEqual('class1 class2');
        });

        test("should return one class", () => {
            const mockClsx = jest.fn().mockImplementation(utils.clsx);
            expect(mockClsx('class1')).toEqual('class1');
        });
    })
})