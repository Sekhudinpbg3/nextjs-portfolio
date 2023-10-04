import { useRef } from "react";
import Image from 'next/image';
import { Row, Col } from "antd";
import { Img } from '@provider/asset';
import { useGsapFromTo } from "@provider/animation";
import { useWindowEvent, isSection, useWindowLoad } from "@provider/hooks";
import { PartText } from './part-text';

const { profile } = Img
export function SectionHome() {
  const parent_ = useRef(null);
  const img_ = useRef(null);

  const tweens = useGsapFromTo(parent_, [
    {
      target: img_,
      from: {
        opacity: 0,
      },
      to: {
        delay: 1,
        opacity: 1,
      }
    }
  ], 1)

  const tweenHandler = () => {
    for (const tween of tweens) {
      if (isSection("home")) {
        tween.play()
      } else {
        tween.reverse()
      }
    }
  }

  useWindowLoad(tweenHandler)
  useWindowEvent("scroll", tweenHandler)

  return (
    <section id="home" className="section flex justify-center">
      <div id="overlay_home" className={`absolute w-full h-full`} />
      <div className={`section_container flex_centerxy`}>
        <Row className={`flex_centerxy h-full lg:h-2/3`}>
          <Col className={`h-fit lg:h-full pt-20 lg:pt-0 `}
            span={24}
            lg={{ span: 10 }}>
            <PartText />
          </Col>

          <Col className={`h-fit lg:h-full
            flex items-center lg:items-end justify-center lg:justify-end`}
            span={24}
            lg={{ span: 14 }}>
            <div ref={parent_} className={`h-full w-full flex items-end
              justify-center lg:justify-end `}>
              <Image ref={img_} className={`object-cover`}
                id='profile_img'
                src={profile.src}
                alt={profile.alt}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}