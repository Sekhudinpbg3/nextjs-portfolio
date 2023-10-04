import { useRef } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Gsap, useGsapFromTo } from "@provider/animation";
import { Icon, Font } from "@provider/asset";
import { isSection, useWindowEvent, useWindowLoad } from "@provider/hooks";
import css from './style.module.css';

const { inter, lato } = Font;

export function PartText() {
  const parent_ = useRef(null);
  const hello_ = useRef(null);
  const name_ = useRef(null);
  const as_ = useRef(null);
  const desc_ = useRef(null);
  const hire_ = useRef(null);

  const tweens = useGsapFromTo(name_, [{
    target: hello_,
    from: {
      display: 'none',
      opacity: 0,
      translateX: -250
    },
    to: {
      display: 'block',
      opacity: 1,
      translateX: 0,
      ease: Gsap.ease('sine')
    }
  }, {
    target: name_,
    from: {
      display: 'none',
      opacity: 0,
      translateY: -250
    },
    to: {
      display: 'block',
      opacity: 1,
      translateY: 0,
      ease: Gsap.ease('back.inOut')
    }
  }, {
    target: as_,
    from: {
      display: 'none',
      opacity: 0,
      translateX: 250
    },
    to: {
      display: 'block',
      opacity: 1,
      translateX: 0,
      ease: Gsap.ease('sine')
    }
  }, {
    target: desc_,
    from: {
      display: 'none',
      opacity: 0,
      translateX: -250
    },
    to: {
      display: 'block',
      opacity: 1,
      translateX: 0,
      ease: Gsap.ease('sine')
    }
  }, {
    target: hire_,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
      ease: Gsap.ease('sine')
    }
  }], 1)

  const tweenHandler = () => {
    for (const tween of tweens) {
      if (isSection("home")) {
        tween.play()
      } else {
        tween.reverse()
      }
    }
  }

  useWindowLoad(tweenHandler)
  useWindowEvent("scroll", tweenHandler)

  return (
    <div ref={parent_} className={`h-full grid grid-cols-1 content-end mb-5
      justify-items-center lg:justify-items-start text-center lg:text-start`}>
      <h2 ref={hello_} className={`${lato.className} ${css['hello']} w-full font-black text-yellow-500
        mt-0.5 md:mt-2 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl`}>
        Hello,
      </h2>
      <h2 ref={name_} className={`${inter.className} ${css['name']} text_title w-full font-black
        mt-2 md:mt-4  lg:mt-6 text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl`}>
        I Am Sekhudin
      </h2>
      <h3 ref={as_} className={`${inter.className} ${css['as']} w-full font-bold text-blue-600
        mt-0.5 md:mt-2  lg:mt-3 text-lg md:text-xl lg:text-2xl 2xl:text-3xl`}>
        Software Enginer
      </h3>

      <p ref={desc_} className={`text_regular font-medium
        mt-3 md:mt-4 lg:mt-7 px-8 lg:px-0 text-base lg:text-lg 2xl:text-xl`}>
        Must explain to how all this mistaken idea
        denouncing pleasure pain the system and expound the actua.
        Must explain to how all this mistaken idea
        denouncing pleasure pain the system and expound the actua.
      </p>
      <button ref={hire_} className={`flex_centerxy w-fit space-x-1 mt-3 md:mt-4 lg:mt-7 text-base lg:text-lg
        py-2 px-4 lg:px-6 rounded-full bg-blue-600 text-gray-100
        group hover:drop-shadow-lg dark:bg-blue-700 duration-500`}
        onClick={() => { tweens[0].restart() }} >
        <span className={`translate-x-4 group-hover:-translate-x-0 duration-500`}>Hire Me</span>
        <span>
          <Icon src={AiOutlineArrowRight}
            fillClass='fill-gray-100 opacity-0 -translate-x-4'
            className='group-hover:translate-x-0 group-hover:opacity-100 duration-500'
          />
        </span>
      </button>
    </div>
  )
}
