import { useRef, useState } from "react"
import { App, Row, Col, Form, Input, Typography } from "antd";
import { BsSendFill, BsArrowRightShort } from "react-icons/bs";
import { Icon } from "@provider/asset";
import { Email } from "@provider/email";
import { isSection, useWindowEvent } from "@provider/hooks";
import { Gsap, useGsapFromTo } from "@provider/animation";
import { CONTACTS } from "./const";
import { EmailForm } from "./interface";
import css from './style.module.css';

export function SectionContact() {
  const [isLoading, setLoading] = useState(false)
  const [emailForm] = Form.useForm();

  const { message } = App.useApp();

  const formOnFinish = async (v: EmailForm) => {
    setLoading(true);
    const key = "sendMail";
    message.open({
      key,
      type: 'loading',
      content: "Sending email..."
    })
    const result = await Email.send(v);
    if (result) {
      emailForm.resetFields();
      message.open({
        key,
        type: 'success',
        content: "Email sent successfully!"
      })
      return setLoading(false);
    }
    message.open({
      key,
      type: 'error',
      content: "Email failed to send!"
    })
    return setLoading(false);
  }


  const parent_ = useRef(null);
  const title_ = useRef(null);
  const desc_ = useRef(null);
  const mail_ = useRef(null);
  const contact_ = useRef(null);

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
      target: mail_,
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
    {
      target: contact_,
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

  const tweenHandler = () => {
    for (const tween of tweens) {
      if (isSection("contact")) {
        tween.play().delay(0.5)
      } else {
        tween.reverse().delay(0.5)
      }
    }
  }

  useWindowEvent("scroll", tweenHandler);

  return (
    <section id="contact" className="section flex justify-center">
      <div id="overlay_contact" className={`absolute w-full h-full`} />
      <div ref={parent_} className={`section_container flex_centerxy flex-col py-20`}>
        <div className={`flex_centery flex-col mb-5`}>
          <h3 ref={title_} className={`${css['contact']} text_title mb-5 font-black text-2xl
            md:text-3xl lg:text-4xl drop-shadow dark:drop-shadow-none`}>
            {"Let's Talk"}
          </h3>
          <p ref={desc_} className="text_regular text-base lg:text-lg text-center px-2 md:px-5">
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
            <div ref={mail_} className="relative card_regular flex_centery flex-col p-10">
              <div className={`${isLoading ? 'block' : 'hidden'} absolute inset-0
                bg-transparent z-10 cursor-not-allowed`} />
              <h3 className={`text-base lg:text-lg font-semibold 
              text-gray-600 dark:text-gray-300 mb-5`}>
                Get in Touch
              </h3>

              <Form<EmailForm> className="w-full"
                form={emailForm}
                id="send-email-form"
                name="email-form"
                layout="vertical"
                autoComplete="off"
                labelAlign="left"
                requiredMark={true}
                onFinish={formOnFinish}>
                <Form.Item<EmailForm>
                  label="Your name"
                  name={"name"}
                  required={true}
                  rules={[{
                    required: true,
                    min: 5,
                  }]}>
                  <Input size="large" />
                </Form.Item>

                <Form.Item<EmailForm>
                  label="Your email"
                  name={"email"}
                  required={true}
                  rules={[{
                    required: true,
                    pattern: Email.pattern,
                    message: "Invalid email"
                  }]}>
                  <Input size="large" />
                </Form.Item>

                <Form.Item<EmailForm>
                  label="Your phone"
                  name={"phone"}
                  rules={[{
                    pattern: Email.phone,
                    message: "Invalid phone number"
                  }]}>
                  <Input size="large" />
                </Form.Item>

                <Form.Item<EmailForm>
                  label="Message"
                  name={"message"}
                  required={true}
                  rules={[{
                    required: true,
                    min: 10
                  }]}>
                  <Input.TextArea
                    autoSize={{ minRows: 4 }} />
                </Form.Item>
                <Form.Item>
                  <button className={`group button_primary flex_centery space-x-2
                    rounded-md py-1.5 px-5 ring-2 font-semibold`}
                    type="submit"
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
            <Row ref={contact_} className="w-full" gutter={[0, 10]}>
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