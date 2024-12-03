export type MySignal<T> = () => T;

export function rskSignal<T>(value: T): MySignal<T>{
  return () => value;
}
