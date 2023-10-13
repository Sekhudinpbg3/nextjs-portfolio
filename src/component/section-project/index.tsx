import { useRef } from "react";
import { Row, Col } from "antd";
import { LiaRocketSolid } from "react-icons/lia";
import { Icon } from "@provider/asset";
import { isSection, useWindowEvent } from "@provider/hooks";
import { useGsapFromTo, Gsap } from "@provider/animation"
import { PartProjects } from "./part-projects";
import { TXT } from './const'

export function SectionProject() {
  const parent_ = useRef(null);
  const title_ = useRef(null);
  const desc_ = useRef(null);
  const carousel_ = useRef(null);

  const tweens = useGsapFromTo(parent_, [
    {
      target: title_,
      from: {
        opacity: 0,
        translateX: -200
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease("sine")
      }
    },
    {
      target: desc_,
      from: {
        opacity: 0,
        translateX: 200
      },
      to: {
        opacity: 1,
        translateX: 0,
        duration: 2,
        ease: Gsap.ease("sine")
      }
    },
    {
      target: carousel_,
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
        ease: Gsap.ease("sine")
      }
    }
  ], 1);

  const tweenHandler = () => {
    for (const tween of tweens) {
      if (isSection("projects")) {
        tween.play().delay(0.5)
      } else {
        tween.reverse().delay(0.5)
      }
    }
  }

  useWindowEvent("scroll", tweenHandler)

  return (
    <section id="projects" className="section flex justify-center">
      <div id="overlay_projects" className={`absolute w-full h-full`} />
      <div ref={parent_} className={`section_container flex_centerxy flex-col py-20`}>
        <Row className={'w-full'}
          justify={"center"}
          align={"middle"}
          gutter={[0, 20]}>
          <Col
            lg={{ span: 12 }}
            span={24}>
            <div className={`flex flex-col items-center lg:items-start`}>
              <h3 ref={title_} className={`text_width_05 text_title mb-5 font-black text-2xl
                md:text-3xl lg:text-4xl drop-shadow dark:drop-shadow-none`}>
                Recent Project
              </h3>
              <p ref={desc_} className={`text_regular text-base lg:text-lg text-center lg:text-start`}>
                {TXT.summary}
              </p>
            </div>
          </Col>

          <Col className="flex justify-center lg:justify-end"
            lg={{ span: 12 }}
            span={24}>
            <div className={`flex_centerxy w-16 h-16 lg:w-20 lg:h-20 p-2 rounded-full
              outline-2 outline-dashed outline-offset-8 outline-blue-700 
              dark:outline-gray-300 bg-blue-600/100 dark:bg-white/10`}>
              <Icon
                sizeClass="w-10 h-10 lg:w-12 lg:h-12"
                fillClass="fill-white dark:fill-gray-300"
                src={LiaRocketSolid} />
            </div>
          </Col>
        </Row>

        <div ref={carousel_} className="w-full mt-10">
          <PartProjects />
        </div>

      </div>
    </section>
  )
}