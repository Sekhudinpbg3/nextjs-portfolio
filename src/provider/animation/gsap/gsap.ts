import * as _ from "lodash";
import { gsap } from "./config";
import * as Interface from "./interface";

export const gsapFrom: Interface.GsapFromFunc = ({ currentTarget }, motion, duration) => {
  const tweens: GSAPTween[] = [];
  if (_.isArray(motion)) {
    _.each(motion, ({ selector, from }) => {
      if (duration && !from.duration) {
        from.duration = duration;
      }
      const el = gsap.utils.selector(currentTarget);
      const target = selector ? el(selector) : currentTarget;
      const tween = gsap.from(target, from);
      tweens.push(tween);
    });
  } else {
    const { selector, from } = motion;
    if (duration && !from.duration) {
      from.duration = duration;
    }
    const el = gsap.utils.selector(currentTarget);
    const target = selector ? el(selector) : currentTarget;
    const tween = gsap.from(target, from);
    tweens.push(tween);
  }
  return tweens;
};

export const gsapTo: Interface.GsapToFunc = ({ currentTarget }, motion, duration) => {
  const tweens: GSAPTween[] = [];

  if (_.isArray(motion)) {
    _.each(motion, ({ selector, to }) => {
      if (duration && !to.duration) {
        to.duration = duration;
      }
      const el = gsap.utils.selector(currentTarget);
      const target = selector ? el(selector) : currentTarget;
      const tween = gsap.to(target, to);
      tweens.push(tween);
    });
  } else {
    const { selector, to } = motion;
    if (duration && !to.duration) {
      to.duration = duration;
    }
    const el = gsap.utils.selector(currentTarget);
    const target = selector ? el(selector) : currentTarget;
    const tween = gsap.to(target, to);
    tweens.push(tween);
  }
  return tweens;
};

export const gsapFromTo: Interface.GsapFromToFunc = ({ currentTarget }, motion, duration) => {
  const tweens: GSAPTween[] = [];

  if (_.isArray(motion)) {
    _.each(motion, ({ selector, from, to }) => {
      if (duration && !to.duration) {
        to.duration = duration;
      }
      const el = gsap.utils.selector(currentTarget);
      const target = selector ? el(selector) : currentTarget;
      const tween = gsap.fromTo(target, from, to);
      tweens.push(tween);
    });
  } else {
    const { selector, from, to } = motion;
    if (duration && !to.duration) {
      to.duration = duration;
    }
    const el = gsap.utils.selector(currentTarget);
    const target = selector ? el(selector) : currentTarget;
    const tween = gsap.fromTo(target, from, to);
    tweens.push(tween);
  }
  return tweens;
};

export const gsapSet: Interface.GsapSetFunc = ({ currentTarget }, motion, duration) => {
  const tweens: GSAPTween[] = [];

  if (_.isArray(motion)) {
    _.each(motion, ({ selector, set }) => {
      if (duration && !set.duration) {
        set.duration = duration;
      }
      const el = gsap.utils.selector(currentTarget);
      const target = selector ? el(selector) : currentTarget;
      const tween = gsap.set(target, set);
      tweens.push(tween);
    });
  } else {
    const { selector, set } = motion;
    if (duration && !set.duration) {
      set.duration = duration;
    }
    const el = gsap.utils.selector(currentTarget);
    const target = selector ? el(selector) : currentTarget;
    const tween = gsap.set(target, set);
    tweens.push(tween);
  }
  return tweens;
};

export const gsapTL: Interface.GsapTLFunc = (tlVars) => {
  const timelines: GSAPTimeline[] = [];
  if (_.isArray(tlVars)) {
    _.each(tlVars, (vars) => {
      const tl = gsap.timeline(vars);
      timelines.push(tl);
    });
  } else {
    const tl = gsap.timeline(tlVars);
    timelines.push(tl);
  }
  return timelines;
};

// class utils
export class Gsap {
  static ease: Interface.EaseFunc = (name) => {
    return name;
  };
}
