import { Button } from "antd";
import { AiOutlineDownload } from "react-icons/ai";
import { Icon } from "@provider/asset";
import css from './style.module.css';

interface Props {
  className?: string | undefined;
}

export function PartResumeButton({ className }: Props) {
  return (
    <Button className={`${className} ${css['bt_resume']}
     text-gray-100 bg-blue-600 hover:drop-shadow-lg dark:bg-blue-700 duration-500`}
      type='link'
      icon={
        <>
          <Icon
            src={AiOutlineDownload}
            fillClass={`text-gray-100`}
          />
        </>}>
      Resume
    </Button>
  )
}