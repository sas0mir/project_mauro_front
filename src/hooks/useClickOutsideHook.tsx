import { RefObject, useEffect, useRef } from 'react'

export const useClickOutside = (
  elementRef: RefObject<Element>,
  callback: () => void,
) => {

    const callbackRef = useRef<() => void>();
    callbackRef.current = callback;

  const handleClick = (event: MouseEvent) => {
    if (!elementRef?.current?.contains(event.target as Element) && callbackRef.current) {
      callbackRef.current();
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}