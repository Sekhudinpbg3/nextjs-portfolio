import { Icon } from "@provider/asset";
import { SOSMEDS } from "./const";

export function PartSocialMedia() {
  return (
    <>
      {
        SOSMEDS.map(({ type, username, url, icon }, key) => (
          <a className={`flex_centerxy p-2 rounded-full bg-gray-900/10 dark:bg-white/10
            hover:bg-gray-900/30 dark:hover:bg-white/30 duration-500 transition-all`}
            key={key}
            href={url}
            target={"_blank"}>
            <Icon
              sizeClass="w-5 h-5"
              fillClass="fill-white dark:fill-gray-300"
              src={icon} />
          </a>
        ))
      }
    </>
  )
}