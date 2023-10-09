import { useRef } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Gsap, useGsapFromTo } from "@provider/animation";
import { Icon, Font } from "@provider/asset";
import { isSection, useWindowEvent } from "@provider/hooks";
import { PartSocialMedia } from "./part-social-media";
import css from './style.module.css';

const { inter, lato } = Font;

export function PartText() {
  const parent_ = useRef(null);
  const hello_ = useRef(null);
  const name_ = useRef(null);
  const as_ = useRef(null);
  const desc_ = useRef(null);
  const hire_ = useRef(null);
  const sosmed_ = useRef(null);

  const tweens = useGsapFromTo(name_, [
    {
      target: hello_,
      from: {
        opacity: 0,
        translateX: -200
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease('sine')
      }
    },
    {
      target: name_,
      from: {
        opacity: 0,
        translateX: 200
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease('sine')
      }
    },
    {
      target: as_,
      from: {
        opacity: 0,
        translateX: 200
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease('sine')
      }
    },
    {
      target: desc_,
      from: {
        opacity: 0,
        translateX: -200
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease('sine')
      }
    },
    {
      target: hire_,
      from: {
        opacity: 0,
        translateX: -200
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease('sine')
      }
    },
    {
      target: sosmed_,
      from: {
        opacity: 0,
        translateX: 200,
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease('sine')
      }
    }
  ], 1)

  const tweenHandler = () => {
    for (const tween of tweens) {
      if (isSection("home", 0.9)) {
        tween.play().delay(0.5);
      }
      else {
        tween.reverse().delay(0.5)
      }
    }
  }

  useWindowEvent("scroll", tweenHandler)

  return (
    <div ref={parent_} className={`h-full grid grid-cols-1 content-end mb-5 lg:mb-0
      justify-items-center lg:justify-items-start text-center lg:text-start`}>
      <h2 ref={hello_} className={`${lato.className} ${css['hello']} w-full font-black 
      text-yellow-500 mt-0.5 md:mt-2 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl`}>
        Hello,
      </h2>
      <h2 ref={name_} className={`${inter.className} ${css['name']} text_title_name w-full 
        font-black mt-2 md:mt-4 text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl`}>
        I Am Sekhudin
      </h2>
      <h3 ref={as_} className={`${inter.className} ${css['as']} w-full font-bold text-blue-600
        mt-0.5 md:mt-2 text-lg md:text-xl lg:text-2xl 2xl:text-3xl`}>
        Software Engineer
      </h3>

      <p ref={desc_} className={`text_regular font-medium
        mt-3 md:mt-4 lg:mt-5 px-8 lg:px-0 text-base lg:text-lg 2xl:text-xl`}>
        Must explain to how all this mistaken idea
        denouncing pleasure pain the system and expound the actua.
        Must explain to how all this mistaken idea
        denouncing pleasure pain the system and expound the actua.
      </p>
      <div className="mt-3 md:mt-4 lg:mt-5 flex_centery space-x-0 md:space-x-3">
        <button ref={hire_} className={`flex_centerxy w-fit space-x-1 text-base
          lg:text-lg py-2 px-4 lg:px-6 rounded-full bg-blue-600 text-gray-100
          group hover:drop-shadow-lg dark:bg-blue-700 duration-500`}
          onClick={() => { tweens[0].restart() }} >
          <span className={`translate-x-4 group-hover:-translate-x-0 duration-500`}>
            Hire Me
          </span>
          <span>
            <Icon src={AiOutlineArrowRight}
              fillClass='fill-gray-100 opacity-0 -translate-x-4'
              className='group-hover:translate-x-0 group-hover:opacity-100 duration-500'
            />
          </span>
        </button>
        <div ref={sosmed_} className="hidden lg:flex items-center space-x-3">
          <PartSocialMedia />
        </div>
      </div>
    </div>
  )
}
