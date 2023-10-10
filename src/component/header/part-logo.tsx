import { Typography } from "antd";
import { Font } from "@provider/asset";

interface Props {
  textClass?: string | undefined;
}

const { inter } = Font;
export function PartLogo({ textClass }: Props) {
  const text = textClass || 'text-white'
  return (
    <Typography.Link
      strong
      href='#home'
      className={`${inter.className}
      text-lg md:text-xl xl:text-2xl
      ${text} hover:animate-pulse invisible md:visible
      duration-500
      `}>
      Sekhudinpbg3
    </Typography.Link>
  )
}