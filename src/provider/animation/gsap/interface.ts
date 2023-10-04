interface GSCache {
  [key: string]: any;
}

interface Element {
  _gsap: GSCache;
}

interface Ref<T> {
  current: T;
}

interface ScrollingTrigger extends Omit<ScrollTrigger.Vars, "trigger"> {
  trigger: {
    current: ScrollTrigger.Vars["trigger"];
  };
}

interface ClientTweenVars extends Omit<GSAPTweenVars, "scrollTrigger"> {
  scrollTrigger?: ScrollingTrigger;
}

type Parent = Element | string | object;

interface GsapFrom {
  target: Ref<GSAPTweenTarget>;
  from: GSAPTweenVars | ClientTweenVars;
}

interface GsapTo {
  target: Ref<GSAPTweenTarget>;
  to: GSAPTweenVars | ClientTweenVars;
}

interface GsapFromTo {
  target: Ref<GSAPTweenTarget>;
  from: GSAPTweenVars | ClientTweenVars;
  to: GSAPTweenVars | ClientTweenVars;
}

interface GsapSet {
  target: Ref<GSAPTweenTarget>;
  set: GSAPTweenVars | ClientTweenVars;
}

export type VarParser = (vars: any) => GSAPTweenVars;
export type UseGsapFrom = (
  parent: Parent,
  motion: GsapFrom | GsapFrom[],
  duration?: number
) => GSAPTween[];
export type UseGsapTo = (
  parent: Parent,
  motion: GsapTo | GsapTo[],
  duration?: number
) => GSAPTween[];
export type UseGsapFromTo = (
  parent: Parent,
  motion: GsapFromTo | GsapFromTo[],
  duration?: number
) => GSAPTween[];
export type UseGsapSet = (
  parent: Parent,
  motion: GsapSet | GsapSet[],
  duration?: number
) => GSAPTween[];

export interface GsapEvent {
  currentTarget: any;
}

interface From {
  selector?: string;
  from: GSAPTweenVars;
}

interface To {
  selector?: string;
  to: GSAPTweenVars;
}

interface FromTo {
  selector?: string;
  from: GSAPTweenVars;
  to: GSAPTweenVars;
}

interface Set {
  selector?: string;
  set: GSAPTweenVars;
}

export type GsapFromFunc = (
  target: GsapEvent,
  motion: From | From[],
  duration?: number
) => GSAPTween[];
export type GsapToFunc = (target: GsapEvent, motion: To | To[], duration?: number) => GSAPTween[];
export type GsapFromToFunc = (
  target: GsapEvent,
  motion: FromTo | FromTo[],
  duration?: number
) => GSAPTween[];
export type GsapSetFunc = (
  target: GsapEvent,
  motion: Set | Set[],
  duration?: number
) => GSAPTween[];

type Ease =
  | "none"
  | "power1"
  | "power1.in"
  | "power1.out"
  | "power1.inOut"
  | "power2"
  | "power2.in"
  | "power2.out"
  | "power2.inOut"
  | "power3"
  | "power3.in"
  | "power3.out"
  | "power3.inOut"
  | "power4"
  | "power4.in"
  | "power4.out"
  | "power4.inOut"
  | "back"
  | "back.in"
  | "back.out"
  | "back.inOut"
  | "bounce"
  | "bounce.in"
  | "bounce.out"
  | "bounce.inOut"
  | "circ"
  | "circ.in"
  | "circ.out"
  | "circ.inOut"
  | "elastic"
  | "elastic.in"
  | "elastic.out"
  | "elastic.inOut"
  | "expo"
  | "expo.in"
  | "expo.out"
  | "expo.inOut"
  | "sine"
  | "sine.in"
  | "sine.out"
  | "sine.inOut";

export type EaseFunc = (ease: Ease) => Ease;
export type GsapTLFunc = (vars?: GSAPTimelineVars | GSAPTimelineVars[]) => GSAPTimeline[];
