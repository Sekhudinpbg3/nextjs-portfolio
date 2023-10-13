import Image from 'next/image';
import { Row, Col } from "antd";
import { Img } from '@provider/asset';
import { PartText } from './part-text';

const { main } = Img.profile
export function SectionHome() {

  return (
    <section id="home" className="section flex_centerxy">
      <div id="overlay_home" className={`absolute w-full h-full`} />
      <div className={`section_container flex_centerxy`}>
        <Row className={`h-full lg:h-2/3 flex items-center lg:items-end`}>
          <Col className={`h-fit lg:h-full pt-20 lg:pt-0 `}
            span={24}
            lg={{ span: 10 }}>
            <PartText />
          </Col>

          <Col className={`h-fit lg:h-full flex items-center lg:items-end
            justify-center lg:justify-end`}
            span={24}
            lg={{ span: 14 }}>
            <div className={`h-full max-h-[500px] w-full max-w-[500px]
              flex items-end justify-center lg:justify-end `}>
              <Image className={`object-cover backdrop-blur-md bg-opacity-25`}
                id='profile_img'
                src={main.src}
                alt={main.alt}
                priority={true}
                placeholder="blur"
                quality={100}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}