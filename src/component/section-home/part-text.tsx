import { AiOutlineArrowRight } from 'react-icons/ai';
import { Icon, Font } from "@provider/asset";
import { CONTACT } from "@provider/types/const";
import { SocialMedia } from './social-media';
import { TXT, SOSMEDS } from './const';
import css from './style.module.css';

const { inter, lato } = Font;

export function PartText() {

  return (
    <div className={`h-full grid grid-cols-1 content-end mb-5 lg:mb-0
      justify-items-center lg:justify-items-start text-center lg:text-start`}>
      <h2 className={`${lato.className} ${css['hello']} w-full font-black 
      text-yellow-500 mt-0.5 md:mt-2 text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl`}>
        {TXT.greet}
      </h2>
      <h2 className={`${inter.className} ${css['name']} text_title_name w-full 
        font-black mt-2 md:mt-4 text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl`}>
        {TXT.name}
      </h2>
      <h3 className={`${inter.className} ${css['as']} w-full font-bold text-blue-600
        mt-0.5 md:mt-2 text-lg md:text-xl lg:text-2xl 2xl:text-3xl`}>
        {TXT.as}
      </h3>

      <p className={`text_regular font-medium
        mt-3 md:mt-4 lg:mt-5 px-8 lg:px-0 text-base lg:text-lg 2xl:text-xl`}>
        {TXT.summary}
      </p>
      <div className="mt-3 md:mt-4 lg:mt-5 flex_centery space-x-0 md:space-x-3">
        <a className={`flex_centerxy w-fit space-x-1 text-base
          lg:text-lg py-2 px-4 lg:px-6 rounded-full bg-blue-600 text-gray-100
          group hover:drop-shadow-lg dark:bg-blue-700 duration-500`}
          href={CONTACT.href}>
          <span className={`translate-x-4 group-hover:-translate-x-0 duration-500`}>
            Hire Me
          </span>
          <span>
            <Icon src={AiOutlineArrowRight}
              fillClass='fill-gray-100 opacity-0 -translate-x-4'
              className='group-hover:translate-x-0 group-hover:opacity-100 duration-500'
            />
          </span>
        </a>
        <div className="hidden lg:flex items-center space-x-3">
          {SOSMEDS.map(({ username, type, url, icon }, key) => (
            <SocialMedia
              key={key}
              username={username}
              type={type}
              url={url}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
