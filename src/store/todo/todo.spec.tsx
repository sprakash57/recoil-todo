import { renderHook, WrapperComponent, cleanup } from '@testing-library/react-hooks';
import { useEffect } from 'react';
import { MutableSnapshot, RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { Todo, todoListState } from '.';

type TRecoilRoot = WrapperComponent<{ initState: ((mutableSnapshot: MutableSnapshot) => void) }>;

describe("todoListState", () => {

    afterEach(() => cleanup());

    it("should initialise with a blank string", () => {
        const { result } = renderHook(() => useRecoilValue(todoListState), {
            wrapper: RecoilRoot as TRecoilRoot
        });
        expect(result.current).toEqual([]);
    });

    it("should have todo in the list", () => {
        const todo = { id: 1, text: 'item', isDone: false, isEditable: false }
        const { result } = renderHook(
            () => {
                const setTodoListState = useSetRecoilState(todoListState);
                useEffect(() => {
                    setTodoListState((prev: Todo[]) => [...prev, todo]);
                }, [setTodoListState]);
                return useRecoilValue(todoListState);
            },
            {
                wrapper: RecoilRoot as TRecoilRoot
            }
        );
        expect(result.current.length).toEqual(1);
    })
});