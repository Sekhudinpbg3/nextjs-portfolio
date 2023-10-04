import { useLayoutEffect } from "react";
import * as _ from "lodash";
import { gsap } from './config';
import * as Interface from './interface';

const varParser: Interface.VarParser = (vars) => {
  const { scrollTrigger } = vars;
  const newVars: any = vars;
  if (scrollTrigger?.trigger?.current) {
    const target = scrollTrigger.trigger.current;
    newVars.scrollTrigger.trigger = target;
  }
  return newVars as GSAPTweenVars;
}

export const useGsapFrom: Interface.UseGsapFrom = (parent, motion, duration) => {
  const tweens: GSAPTween[] = [];
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (_.isArray(motion)) {
        _.each(motion, ({ target, from }) => {
          if (duration && !from.duration) {
            from.duration = duration
          }
          const tween = gsap.from(target.current, varParser(from));
          tweens.push(tween);
        })
      } else {
        const { target, from } = motion;
        if (duration && !from.duration) {
          from.duration = duration
        }
        const tween = gsap.from(target.current, varParser(from));
        tweens.push(tween);
      }
    }, parent)
    return () => ctx.revert()
  }, [])
  return tweens
}

export const useGsapTo: Interface.UseGsapTo = (parent, motion, duration) => {
  const tweens: GSAPTween[] = [];
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (_.isArray(motion)) {
        _.each(motion, ({ target, to }) => {
          if (duration && !to.duration) {
            to.duration = duration
          }
          const tween = gsap.to(target.current, varParser(to));
          tweens.push(tween);
        })
      } else {
        const { target, to } = motion;
        if (duration && !to.duration) {
          to.duration = duration
        }
        const tween = gsap.to(target.current, varParser(to));
        tweens.push(tween);
      }
    }, parent)
    return () => ctx.revert()
  }, [])
  return tweens
}

export const useGsapFromTo: Interface.UseGsapFromTo = (parent, motion, duration) => {
  const tweens: GSAPTween[] = [];
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (_.isArray(motion)) {
        _.each(motion, ({ target, from, to }) => {
          if (duration && !to.duration) {
            to.duration = duration
          }
          const tween = gsap.fromTo(target.current, varParser(from), varParser(to));
          tweens.push(tween);
        })
      } else {
        const { target, from, to } = motion;
        if (duration && !to.duration) {
          to.duration = duration
        }
        const tween = gsap.fromTo(target.current, varParser(from), varParser(to));
        tweens.push(tween)
      }
    }, parent)
    return () => ctx.revert()
  }, [])
  return tweens
}

export const useGsapSet: Interface.UseGsapSet = (parent, motion, duration) => {
  const tweens: GSAPTween[] = [];
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      if (_.isArray(motion)) {
        _.each(motion, ({ target, set }) => {
          if (duration && !set.duration) {
            set.duration = duration
          }
          const tween = gsap.set(target.current, varParser(set));
          tweens.push(tween)
        })
      } else {
        const { target, set } = motion;
        if (duration && !set.duration) {
          set.duration = duration
        }
        const tween = gsap.set(target.current, varParser(set));
        tweens.push(tween)
      }
    }, parent)
    return () => ctx.revert()
  }, [])
  return tweens
}