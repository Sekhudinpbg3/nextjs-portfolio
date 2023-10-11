import { Icon } from "@provider/asset";
import { SocialMedia as Props } from "./interface";

interface SocialMediaProps extends Props {
  bgClass?: string | undefined;
  fillClass?: string | undefined;
}

export function SocialMedia({ username, icon, type, url, bgClass, fillClass }: SocialMediaProps) {
  const bg = bgClass || `bg-gray-900/10 dark:bg-white/10 
  hover:bg-gray-900/30 dark:hover:bg-white/30 backdrop-blur-sm`;
  const fill = fillClass || "fill-white dark:fill-gray-300";

  return (
    <a className={`flex_centerxy p-2 rounded-full duration-500 transition-all ${bg}`}
      href={url}
      target={"_blank"}>
      <Icon
        sizeClass="w-5 h-5"
        fillClass={fill}
        src={icon} />
    </a>
  )
}