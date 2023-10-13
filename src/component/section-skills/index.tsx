import { Col, Row } from "antd";
import { Icon } from "@provider/asset";
import { TXT, SKILLS } from './const';

export function SectionSkills() {

  return (
    <section id="skills" className="section flex justify-center">
      <div id="overlay_skills" className={`absolute w-full h-full`} />
      <div className={`section_container flex_centerxy flex-col py-20`}>
        <div className={`flex_centery flex-col mb-4 lg:mb-5`}>
          <h3 className={`text_width_05 text_title mb-5 font-black text-2xl
          md:text-3xl lg:text-4xl drop-shadow dark:drop-shadow-none`}>
            Skills
          </h3>
          <p className="text_regular text-base lg:text-lg text-center px-2 md:px-5">
            {TXT.summary}
          </p>
        </div>

        <Row className={`w-full`}
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
                <div className={`card_regular text_regular h-fit md:h-full flex_centery flex-col p-5`}>
                  <h3 className={`text-base lg:text-lg font-bold`}>
                    {skillType}
                  </h3>

                  <Row className="w-full mt-5"
                    align={"stretch"}
                    gutter={[10, 20]}>{
                      skills.map(({ name, level, icon }, key2) => (
                        <Col key={key2}
                          sm={{ span: 8 }}
                          md={{ span: 12 }}
                          xxl={{ span: 8 }}
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
                              <p className="text_regular font-semibold">{name}</p>{
                                level === 'Basic' ? (
                                  <p className="text-sm font-medium text-blue-600 dark:text-sky-600">{level}</p>
                                ) : level === 'Intermediate' ? (
                                  <p className="text-sm font-medium text-green-600 dark:text-emerald-600">{level}</p>
                                ) :
                                  <p className="text-sm font-medium text-purple-600 dark:text-purple-700">{level}</p>
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