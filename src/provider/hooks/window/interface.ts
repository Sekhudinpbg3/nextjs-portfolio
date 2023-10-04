type Listener = () => void;
type EventListenet = (e: Event) => void;
type WindowEvent = keyof WindowEventMap;

export type UseWindowLoad = (listener: Listener) => void;
export type UseWindowMedia<T> = (type: T, listener: Listener) => void;
export type UseWindowEvent = (event: WindowEvent, listener: EventListenet) => void;

export type ElementBy = "id" | "class";
