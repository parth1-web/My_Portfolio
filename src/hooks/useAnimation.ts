import { useReducedMotion } from "./useReducedMotion";

export function useAnimation() {
  const reducedMotion = useReducedMotion();

  const getInitial = <T,>(value: T): T | undefined => {
    return reducedMotion ? undefined : value;
  };

  const getAnimate = <T,>(value: T): T | undefined => {
    return reducedMotion ? undefined : value;
  };

  const getWhileHover = <T,>(value: T): T | undefined => {
    return reducedMotion ? undefined : value;
  };

  const getExit = <T,>(value: T): T | undefined => {
    return reducedMotion ? undefined : value;
  };

  return { getInitial, getAnimate, getWhileHover, getExit, reducedMotion };
}