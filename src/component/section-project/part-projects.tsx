import { Row, Col, Carousel, CarouselProps, } from "antd";
import { Icon, Img } from "@provider/asset";
import { PROJECTS } from "./const";
import Image from "next/image";

const responsive: CarouselProps['responsive'] = [
  {
    breakpoint: 1279,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 639,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
]

const { profile } = Img;
export function PartProjects() {
  return (
    <Carousel className={`overflow-hidden cursor-grab select-none`}
      dots={{ className: "dots_class" }}
      autoplay={false}
      pauseOnHover={true}
      draggable={true}
      infinite={true}
      slidesToShow={3}
      speed={2000}
      autoplaySpeed={5000}
      lazyLoad={'progressive'}
      responsive={responsive}>
      {PROJECTS.map(({ name, type, stacks, images, link }, key) => (
        <div className="px-5 lg:px-7 xl:px-3"
          key={key}>
          <div className={`flex flex-col w-full mb-8`}>
            <div className="w-full">
              <Carousel className="w-full"
                dots={false}
                effect="fade"
                lazyLoad={'progressive'}
                speed={2000}
                autoplaySpeed={5000}
                autoplay={false}>
                {images.map(({ src, alt }, imgKey) => (
                  <div key={imgKey} className="w-full h-[500px]">
                    <Image className={`object-cover w-full h-full hover:scale-150
                      transition-all duration-500`}
                      src={src}
                      alt={alt} />
                  </div>
                ))}
              </Carousel>
            </div>
            <div className="mt-2">
              <h3 className={`text_regular font-semibold text-lg lg:text-2xl`}>
                {name}
              </h3>
              <Row
                justify={"space-between"}
                align={"middle"}
                gutter={[10, 10]}>
                <Col span={9}>
                  <p className={`font-semibold text-blue-600 dark:text-blue-700`}>
                    {type}
                  </p>
                </Col>

                <Col className={`flex_centery justify-end space-x-2`}
                  span={15}>
                  {stacks.map((stack, stackKey) => (
                    <div className={`p-1 rounded-full bg-white dark:bg-white/20`}
                      key={stackKey}>
                      <Icon
                        sizeClass="w-5 h-5"
                        fillClass="fill-gray-600 dark:fill-gray-200"
                        src={stack} />
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  )
}
