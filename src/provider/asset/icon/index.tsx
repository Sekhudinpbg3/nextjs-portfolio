import { IconContext, IconType } from "react-icons";

interface IconProps {
  src: IconType;
  divClass?: string | undefined;
  rootClass?: string | undefined;
  className?: string | undefined;
  sizeClass?: string | undefined;
  fillClass?: string | undefined;
  strokeClass?: string | undefined;
}

export function Icon({ src, divClass, rootClass, className, sizeClass, fillClass, strokeClass }: IconProps) {
  const size = sizeClass || 'w-6 h-6';
  const fill = fillClass || 'fill-gray-700 dark:fill-gray-100';
  const stroke = strokeClass || 'stroke-0 stroke-gray-700 dark:stroke-gray-100';
  const classes = rootClass || `${size} ${fill} ${stroke} ${className}`;
  const IconComponent = src

  return (
    <IconContext.Provider value={{ className: classes }}>
      {
        divClass ? (
          <div className={divClass}>
            <IconComponent />
          </div>
        ) : (
          <IconComponent />
        )
      }
    </IconContext.Provider>
  )
}