import { Row, Col, Form, Input, Typography } from "antd";
import { BsSendFill, BsArrowRightShort } from "react-icons/bs";
import { Icon } from "@provider/asset";
import { CONTACTS } from "./const";
import { EmailForm } from "./interface";
import css from './style.module.css';

export function SectionContact() {
  return (
    <section id="contact" className="section flex justify-center">
      <div id="overlay_contact" className={`absolute w-full h-full`} />
      <div className={`section_container flex_centerxy flex-col py-20`}>
        <div className={`flex_centery flex-col mb-5`}>
          <h3 className={`${css['contact']} text_title mb-5 font-black text-2xl
            md:text-3xl lg:text-4xl drop-shadow dark:drop-shadow-none`}>
            {"Let's Talk"}
          </h3>
          <p className="text_regular text-base lg:text-lg text-center px-2 md:px-5">
            Must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you
            a complete account the system and expound the actual
            and praising pain was born.
          </p>
        </div>

        <Row className="w-full"
          align={"stretch"}
          gutter={[20, 10]}>
          <Col
            md={{ span: 12 }}
            lg={{ span: 14 }}
            xxl={{ span: 16 }}
            span={24}>
            <div className="card_regular flex_centery flex-col p-10">
              <h3 className={`text-base lg:text-lg font-semibold 
              text-gray-600 dark:text-gray-300 mb-5`}>
                Get in Touch
              </h3>

              <Form className="w-full"
                name="email-form"
                layout="vertical"
                autoComplete="off"
                labelAlign="left"
                requiredMark={true}
              >
                <Form.Item<EmailForm>
                  label="Your name"
                  name={"name"}
                  required={true}>
                  <Input size="large" />
                </Form.Item>

                <Form.Item<EmailForm>
                  label="Your email"
                  name={"email"}
                  required={true}>
                  <Input size="large" />
                </Form.Item>

                <Form.Item<EmailForm>
                  label="Your phone"
                  name={"phone"}>
                  <Input size="large" />
                </Form.Item>

                <Form.Item<EmailForm>
                  label="Message"
                  name={"message"}
                  required={true}>
                  <Input.TextArea
                    autoSize={{
                      minRows: 4
                    }} />
                </Form.Item>
                <Form.Item>
                  <button className={`group button_primary flex_centery space-x-2
                    rounded-md py-1.5 px-5 ring-2 font-semibold`}
                    name="send-button"
                    aria-label="send-button">
                    <span>Send</span>
                    <Icon
                      sizeClass="w-4 h-4"
                      fillClass={`fill-blue-600 dark:fill-blue-700
                      dark:group-hover:fill-gray-300 duration-500`}
                      src={BsSendFill} />
                  </button>
                </Form.Item>
              </Form>
            </div>
          </Col>

          <Col
            md={{ span: 12 }}
            lg={{ span: 10 }}
            xxl={{ span: 8 }}
            span={24}>
            <Row className="w-full" gutter={[0, 10]}>
              {
                CONTACTS.map(({ address, type, icon, anchor }, key) => (
                  <Col
                    key={key}
                    span={24}>
                    <div className="card_regular flex_centery space-x-2 p-5">
                      <Icon
                        fillClass="fill-gray-500 dark:fill-slate-500"
                        sizeClass="w-8 xl:w-10 h-8 xl:h-10"
                        src={icon} />
                      <div className="w-full">
                        <Typography.Paragraph className={`text_regular w-full flex justify-between mb-0.5
                          text-sm lg:text-base font-semibold`}
                          copyable={{}}>
                          {address}
                        </Typography.Paragraph>
                        <p className="text-xs lg:text-sm text-green-600 dark:text-green-700">
                          {type}
                        </p>
                        {
                          anchor ? (
                            <a className="mt-2 w-fit flex_centery text-xs group"
                              target="_blank"
                              href={anchor.href}>
                              <span className={`text-blue-600 dark:text-gray-300`}>
                                {anchor.text}
                              </span>
                              <Icon className={`opacity-0 -translate-x-4
                                  group-hover:opacity-100 group-hover:translate-x-0 duration-700`}
                                fillClass={`fill-blue-600 dark:fill-gray-300`}
                                src={BsArrowRightShort} />
                            </a>
                          ) : null
                        }
                      </div>

                    </div>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  )
}