import { Row } from "antd";
import { Col } from "antd/lib";

export function SectionPortfolio() {
  return (
    <section id="portfolio" className="section flex justify-center">
      <div id="overlay_portfolio" className={`absolute w-full h-full`} />
      <div className={`section_container flex_centerxy`}>
        <Row className={`h-full w-full lg:h-2/3 py-16 lg:py-0`}>
          <Col className={`flex justify-center lg:justify-start
            items-start lg:items-end`}
            span={24}
            lg={{ span: 8 }}>
            <div className="bg-green-300">
              column 1
            </div>
          </Col>

          <Col className={`flex justify-center lg:justify-end
            items-end lg:items-end`}
            span={24}
            lg={{ span: 16 }}>
            <div className="bg-green-300">
              column 1
            </div>
          </Col>
        </Row>
      </div>
    </section>
  )
}