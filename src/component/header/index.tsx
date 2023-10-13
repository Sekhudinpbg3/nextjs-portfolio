import { useState } from "react";
import { Layout, Row, Col } from 'antd';
import * as _ from 'lodash';
import { ThemeToggle } from "@provider/antd";
import { useWindowEvent, useWindowLoad } from "@provider/hooks";
import { PartLogo } from './part-logo';
import { PartNavMenu } from './part-nav-menu';
import { PartResumeButton } from './part-resume-button';
import { BgClass, LogoClass } from './interface';

export function Header() {
  const [bgClass, setBgClass] = useState<BgClass>('header_scroll');
  const [logoText, setLogoText] = useState<LogoClass>('text-blue-600');

  const scrollHandler = () => {
    const scrollY = window.scrollY;
    if (scrollY <= 3) {
      setBgClass('bg-transparent');
      setLogoText('text-white');
    } else {
      setBgClass('header_scroll');
      setLogoText('text-blue-600');
    }
  }

  useWindowLoad(scrollHandler);
  useWindowEvent('scroll', scrollHandler);

  return (
    <>
      <Layout.Header className={`${bgClass} px-4 z-50
        fixed top-0 left-0 right-0
        flex justify-center`}>
        <Row className={`w-full lg:w-11/12 xl:w-10/12 2xl:w-9/12`}
          wrap={false}
          justify={"space-between"}>
          <Col
            flex={"none"}
            order={2}
            md={{ order: 1 }}>
            <PartLogo textClass={logoText} />
          </Col>

          <Col className={`flex items-center`}
            order={1}
            md={{ order: 1 }}>
            <PartNavMenu />
          </Col>

          <Col className="flex_centery space-x-2"
            order={3}
            md={{ order: 1 }}>
            <PartResumeButton/>
            <ThemeToggle />
          </Col>
        </Row>
      </Layout.Header>
    </>
  )
}