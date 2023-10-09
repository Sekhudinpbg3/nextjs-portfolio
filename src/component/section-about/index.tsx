import { useRef } from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import { Icon, Img } from "@provider/asset";
import { Gsap, useGsapFromTo } from "@provider/animation";
import { isSection, useWindowEvent } from "@provider/hooks";
import { COURSES } from "./const";
import css from './style.module.css';

const { profile } = Img;
export function SectionAbout() {
  const parent_ = useRef(null);
  const img_ = useRef(null);
  const textImg_ = useRef(null);
  const title_ = useRef(null);
  const subTittle_ = useRef(null);
  const desc_ = useRef(null);
  const cards_ = useRef(null);

  const tweens = useGsapFromTo(parent_, [
    {
      target: img_,
      from: {
        opacity: 0,
        translateX: -250,
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease("sine")
      }
    },
    {
      target: textImg_,
      from: {
        opacity: 0,
        translateX: 250,
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease("sine")
      }
    },
    {
      target: title_,
      from: {
        opacity: 0,
        translateY: 250,
      },
      to: {
        opacity: 1,
        translateY: 0,
        ease: Gsap.ease("sine")
      }
    },
    {
      target: subTittle_,
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
        delay: 1,
        duration: 1,
        ease: Gsap.ease("sine")
      }
    },
    {
      target: desc_,
      from: {
        opacity: 0,
        scale: 0.4,
      },
      to: {
        opacity: 1,
        scale: 1,
        ease: Gsap.ease("sine")
      }
    },
    {
      target: cards_,
      from: {
        opacity: 0,
        translateX: -200,
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease("sine")
      }
    },
  ], 1)

  const tweenHandler = () => {
    for (const tween of tweens) {
      if (isSection("about")) {
        tween.play().delay(0.5)
      } else {
        tween.reverse().delay(0.5)
      }
    }
  }

  useWindowEvent("scroll", tweenHandler)

  return (
    <section id="about" className="section flex justify-center">
      <div id="overlay_about" className={`absolute w-full h-full`} />

      <div className={`section_container`}>
        <Row ref={parent_} className={`h-fit lg:h-full py-20`} justify={"end"}>
          <Col className="flex justify-start items-center"
            lg={{ span: 12 }}
            span={24}>
            <div className="relative">
              <Image ref={img_} className={`object-cover rounded-2xl
                w-[200px] h-[250px] lg:w-[350px] lg:h-[400px]
                bg-gradient-to-b from-transparent via-blue-600/70 to-blue-600
                dark:from-blue-600/5 dark:via-blue-600/40 dark:to-blue-600`}
                src={profile.src}
                alt={profile.alt} />

              <div ref={textImg_} className={`flex_centerxy h-fit w-fit p-1
                absolute top-[73%] left-[50%] lg:left-[65%] rounded-lg lg:rounded-2xl
                bg-gradient-to-r from-blue-300 via-blue-500 to-blue-600`}>
                <div className={`flex_centery space-x-2 px-3 py-1.5 lg:px-6 lg:py-3
                  rounded-md lg:rounded-xl bg-gradient-to-r from-blue-800 to-blue-600`}>
                  <h3 className={`text-xl lg:text-3xl font-black text-white`}>100%</h3>

                  <div className="text-white text-sm lg:text-base">
                    <h3>Profesional</h3>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          <Col className={`mt-8 lg:mt-0 flex justify-start items-start
            lg:items-center`}
            lg={{ span: 12 }}
            span={24}>
            <div>
              <h2 ref={title_} className={`${css['about_me']} text_title text-white font-black text-2xl mb-5
                md:text-3xl lg:text-4xl drop-shadow dark:drop-shadow-none`}>
                About Me
              </h2>
              <p ref={desc_} className="text_regular text-left text-base lg:text-lg">
                Must explain to you how all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you
                a complete account the system and expound the actual
                and praising pain was born.
              </p>

              <div ref={cards_} className={`card_regular text_regular flex_centery flex-col h-fit md:h-full p-5 mt-10`}>
                <h3 ref={subTittle_} className={`text-base lg:text-lg font-black`}>
                  Related Course
                </h3>

                <Row className="w-full mt-3"
                  align={"stretch"}
                  gutter={[10, 10]}>{
                    COURSES.map(({ name, icon }, key) => (
                      <Col key={key}
                        md={{ span: 8 }}
                        lg={{ span: 12 }}
                        xxl={{ span: 8 }}
                        span={12}>
                        <Row className="w-full h-full"
                          wrap={false}
                          justify={"start"}
                          align={"stretch"}
                          gutter={[5, 5]}>
                          <Col>
                            <Icon sizeClass="w-7 h-7"
                              fillClass="fill-gray-500 dark:fill-slate-500"
                              src={icon} />
                          </Col>

                          <Col>
                            <div className="w-full">
                              <h4 className="text_regular font-[500]">{name}</h4>
                            </div>
                          </Col>

                        </Row>
                      </Col>
                    ))
                  }</Row>
              </div>
            </div>
          </Col>
        </Row>

      </div>
    </section>
  )
}