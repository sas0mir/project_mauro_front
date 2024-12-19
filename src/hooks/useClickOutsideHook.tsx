import { RefObject, useEffect, useRef, useCallback } from 'react'

export const useClickOutside = (
    elementRef: RefObject<Element>,
    callback: () => void,
) => {

    const callbackRef = useRef<() => void>();
    callbackRef.current = callback;

    const handleClick = useCallback((event: MouseEvent) => {
        if (!elementRef?.current?.contains(event.target as Element) && callbackRef.current) {
        callbackRef.current();
        }
    }, [elementRef])

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => {
        document.removeEventListener('click', handleClick)
        }
    })
}