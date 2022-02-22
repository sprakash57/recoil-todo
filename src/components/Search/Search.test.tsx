import { RecoilRoot } from 'recoil';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Search from 'components/Search';

describe("Search", () => {

    afterEach(() => cleanup());

    it("should initialize with empty todo input", () => {
        const { queryByTestId } = render(<Search />, { wrapper: RecoilRoot });
        const input = queryByTestId("todo-input") as HTMLInputElement;
        expect(input.value).toBe("1");
    });

    it("should have type todo item", () => {
        const { getByTestId } = render(<Search />, { wrapper: RecoilRoot });
        const el = getByTestId("todo-input");
        const target = { value: 'todo-item' };
        fireEvent.change(el, { target });
        expect((el as HTMLInputElement).value).toEqual("todo-item");
    });
})