import { Row, Col } from "antd";
import { LiaRocketSolid } from "react-icons/lia";
import { Icon } from "@provider/asset";
import { PartProjects } from "./part-projects";
import { TXT } from './const'

export function SectionProject() {

  return (
    <section id="projects" className="section flex justify-center">
      <div id="overlay_projects" className={`absolute w-full h-full`} />
      <div className={`section_container flex_centerxy flex-col py-20`}>
        <Row className={'w-full'}
          justify={"center"}
          align={"middle"}
          gutter={[0, 20]}>
          <Col
            lg={{ span: 12 }}
            span={24}>
            <div className={`flex flex-col items-center lg:items-start`}>
              <h3 className={`text_width_05 text_title mb-5 font-black text-2xl
                md:text-3xl lg:text-4xl drop-shadow dark:drop-shadow-none`}>
                Recent Project
              </h3>
              <p className={`text_regular text-base lg:text-lg text-center lg:text-start`}>
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

        <div className="w-full mt-10">
          <PartProjects />
        </div>

      </div>
    </section>
  )
}