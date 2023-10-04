import { useRef, } from "react"
import { Col, Row } from "antd";
import { Icon } from "@provider/asset";
import { useGsapFromTo, Gsap } from "@provider/animation";
import { isSection, useWindowEvent, useWindowLoad } from "@provider/hooks";
import { SKILLS } from './const';
import css from './style.module.css';

export function SectionSkills() {
  const parent_ = useRef(null);
  const title_ = useRef(null);
  const desc_ = useRef(null);
  const cards_ = useRef(null);
  const cardChild_ = [useRef(null), useRef(null), useRef(null), useRef(null)]

  const tweens = useGsapFromTo(parent_, [
    {
      target: title_,
      from: {
        opacity: 0,
        translateY: -200,

      },
      to: {
        opacity: 1,
        translateY: 0,
        ease: Gsap.ease("sine")
      }
    },
    {
      target: desc_,
      from: {
        opacity: 0,
        translateX: 200,
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease("sine")
      }
    }
  ], 1)

  const cardTweens = useGsapFromTo(cards_, [
    {
      target: cardChild_[0],
      from: {
        opacity: 0,
        translateY: -200,
      },
      to: {
        opacity: 1,
        translateY: 0,
        ease: Gsap.ease("sine"),
      }
    },
    {
      target: cardChild_[1],
      from: {
        opacity: 0,
        translateX: 200,
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease("sine"),
      }
    },
    {
      target: cardChild_[2],
      from: {
        opacity: 0,
        translateX: -200,
      },
      to: {
        opacity: 1,
        translateX: 0,
        ease: Gsap.ease("sine"),
      }
    },
    {
      target: cardChild_[3],
      from: {
        opacity: 0,
        translateY: 200,
      },
      to: {
        opacity: 1,
        translateY: 0,
        ease: Gsap.ease("sine"),
      }
    }
  ], 1)

  const tweenHandler = () => {
    for (const tw of tweens) {
      if (isSection("skills")) {
        tw.play()
      } else {
        tw.reverse()
      }
    }
  }

  const cardTweenHandler = () => {
    for (const tw of cardTweens) {
      if (isSection("skills")) {
        tw.play()
      } else {
        tw.reverse()
      }
    }
  }

  useWindowLoad(tweenHandler);
  useWindowEvent("scroll", tweenHandler);
  useWindowLoad(cardTweenHandler);
  useWindowEvent("scroll", cardTweenHandler);


  return (
    <section ref={parent_} id="skills" className="section flex justify-center">
      <div id="overlay_skills" className={`absolute w-full h-full`} />
      <div className={`section_container flex_centery flex-col py-20`}>
        <div className={`flex_centery flex-col mb-4 lg:mb-5`}>
          <h3 ref={title_} className={`${css['skills']} text_title mb-1 font-black text-2xl
          md:text-3xl lg:text-4xl drop-shadow dark:drop-shadow-none`}>
            Skills
          </h3>
          <p ref={desc_} className="text_regular text-base lg:text-lg text-center px-2 md:px-5">
            Must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you
            a complete account the system and expound the actual
            and praising pain was born.
          </p>
        </div>

        <Row className={`w-full`}
          ref={cards_}
          justify={"center"}
          gutter={[
            { xs: 0, sm: 0, md: 20, xl: 25 },
            { xs: 15, sm: 20, md: 20, xl: 25 }
          ]}>{
            SKILLS.map(({ skillType, skills }, key) => (
              <Col
                key={key}
                md={{ span: 12 }}
                span={24}>
                <div ref={cardChild_[key]} className={`card_regular h-fit md:h-full flex_centery flex-col p-5`}>
                  <h3 className={`text-base lg:text-lg font-bold text-blue-600`}>
                    {skillType}
                  </h3>

                  <Row className="w-full mt-5"
                    align={"stretch"}
                    gutter={[10, 20]}>{
                      skills.map(({ name, level, icon }, key2) => (
                        <Col key={key2}
                          lg={{ span: 8 }}
                          span={12}>
                          <Row className="w-full"
                            justify={"start"}
                            align={"middle"}
                            gutter={[10, 5]}>
                            <Col>
                              <Icon sizeClass="w-7 h-7"
                                fillClass="fill-gray-500 dark:fill-slate-500"
                                src={icon} />
                            </Col>
                            
                            <Col span={"auto"}>
                              <h4 className="text_regular font-semibold">{name}</h4>{
                                level === 'Basic' ? (
                                  <h5 className="text-xs text-blue-600 dark:text-blue-700">{level}</h5>
                                ) : level === 'Intermediate' ? (
                                  <h5 className="text-xs text-green-600 dark:text-green-700">{level}</h5>
                                ) :
                                  <h5 className="text-xs text-purple-600 dark:text-purple-700">{level}</h5>
                              }</Col>
                          </Row>
                        </Col>
                      ))
                    }</Row>
                </div>
              </Col>
            ))
          }</Row>
      </div>
    </section>
  )
}