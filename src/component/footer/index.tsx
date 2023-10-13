import { Row, Col, Layout, Avatar } from "antd";
import { AiOutlineMinus } from "react-icons/ai";
import { Img, Icon } from "@provider/asset";
import { SocialMedia } from "@component/section-home/social-media";
import { SOSMEDS } from "@component/section-home/const";
import { NAVIGATIONS } from "./const";

const { bw } = Img.profile;
export function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <Layout.Footer className="footer_class m-0 p-0">
      <div className="footer_body w-full bg-gray-50 ">
        <div className={`hidden lg:flex justify-center items-center pt-20 pb-5 bg-white/10 backdrop-blur-sm`}>
          <Row className="footer_container px-5"
            gutter={[10, 0]}>
            <Col span={8}>
              <div>
                <div className="flex_centery space-x-2">
                  <Avatar className={`bg-black/10 dark:bg-white/10`}
                    shape="circle"
                    size={56}
                    alt={bw.alt}
                    src={bw.url} />
                  <h3 className={`text-2xl 2xl:text-3xl font-black
                  text-blue-600 dark:text-blue-700`}>
                    Sekhudinpbg3
                  </h3>
                </div>
                <p className={`text-start mt-5 pr-2`}>
                  Welcome and open yourself to your truest love
                  this year with us! With the Release Process
                </p>

                <div className="flex space-x-2 mt-5">
                  {SOSMEDS.map((sosmed, key) => (
                    <SocialMedia fillClass="fill-gray-600 dark:fill-gray-300"
                      key={key}
                      {...sosmed} />
                  ))}
                </div>
              </div>
            </Col>

            <Col span={16}>
              <Row
                align={'top'}
                justify={'end'}
                gutter={[10, 0]}>
                {NAVIGATIONS.map(({ title, links }, key) => (
                  <Col
                    key={key}
                    span={24 / NAVIGATIONS.length}>
                    <div className="flex justify-end">
                      <div>
                        <h3 className="text_regular font-bold text-lg">
                          {title}
                        </h3>
                        <div className="mt-5">
                          {links.map(({ title, href }, keyLink) => (
                            <div className={`group flex_centery space-x-2 mt-3`}
                              key={keyLink}>
                              <Icon
                                fillClass={`fill-gray-600 dark:fill-gray-300
                              group-hover:fill-blue-600 dark:group-hover:fill-blue-700 duration-500`}
                                src={AiOutlineMinus} />
                              <a className={`text-base font-medium text-gray-600 dark:text-gray-300
                              group-hover:text-blue-600 dark:group-hover:text-blue-700 duration-500`}
                                href={href}>{title}</a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </div>

        <div className={`flex_centerxy bg-white dark:bg-slate-900`}>
          <p className="font-medium text_regular py-2 lg:py-2.5">
            {`Copyright ©${currentYear} Sekhudinpbg3. All rights reserved.`}
          </p>
        </div>
      </div>
    </Layout.Footer>
  )
}