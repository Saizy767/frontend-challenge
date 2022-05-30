import { useEffect, useRef } from "react"
import useOnScreen from "./useOnScreen"

export function useScroll(parentRef: React.MutableRefObject<HTMLElement| null>,
                          childRef: React.MutableRefObject<HTMLDivElement| null>, 
                          callback: () => void){

    const observer = useRef<any>({})
    const isVisible = useOnScreen(childRef)

    useEffect(() => {
        let observerRefValue: HTMLDivElement | null = null

        const options = {
            root: parentRef.current,
            rootMargin: '0px',
            threshold: 0
        }
        observer.current = new IntersectionObserver(([target]) => {
            if (target.isIntersecting && isVisible) {
                callback()
            }
        }, options)

        if (childRef.current) {
            observer.current.observe(childRef.current);
            observerRefValue = childRef.current; // <-- save ref value
          }

        return function () {
            if (observerRefValue) {observer.current.unobserve(observerRefValue)}; // <-- use saved value
  };
    }, [childRef, parentRef, callback, isVisible])
}
