import { Tooltip } from "antd";
import { AiOutlineDownload } from "react-icons/ai";
import { Icon } from "@provider/asset";

export function PartResumeButton() {
  return (
    <button className="hidden md:block"
      name="resume-button"
      aria-label="resume-button">
      <span className={`text_regular space-x-1
        hidden lg:flex items-center group`}>
        <span className="group-hover:text-blue-700 duration-500">
          Resume
        </span>
        <Icon className="group-hover:fill-blue-700 duration-300"
          sizeClass="w-5 h-5"
          fillClass="fill-gray-700 dark:fill-gray-300"
          src={AiOutlineDownload} />
      </span>

      <span className={`block lg:hidden h-7 w-7 p-1 rounded-full
        hover_blur duration-500`}>
        <Tooltip
          title="Resume"
          placement="bottom"
          color={`rgb(0 0 0 / 0.5)`}>
          <>
            <Icon
              sizeClass="w-5 h-5"
              fillClass="fill-gray-700 dark:fill-gray-300"
              src={AiOutlineDownload} />
          </>
        </Tooltip>
      </span>
    </button>
  )
}