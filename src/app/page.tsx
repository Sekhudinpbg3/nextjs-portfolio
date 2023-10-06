"use client";
import dynamic from "next/dynamic";
import { Layout, FloatButton } from "antd";
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Icon } from "@provider/asset"

const Header = dynamic(() => import("@component/header").then((mo) => mo.Header));
const Footer = dynamic(() => import("@component/footer").then((mo) => mo.Footer));
const SectionHome = dynamic(() => import("@component/section-home").then((mo) => mo.SectionHome));
const SectionAbout = dynamic(() => import("@component/section-about").then((mo) => mo.SectionAbout));
const SectionSkills = dynamic(() => import("src/component/section-skills").then((mo) => mo.SectionSkills));
const SectionProject = dynamic(() => import("src/component/section-project").then((mo) => mo.SectionProject));
const SectionContact = dynamic(() => import("@component/section-contact").then((mo) => mo.SectionContact));

export default function Home() {
  return (
    <Layout className="relative w-full overflow-hidden">
      <Header />
      <Layout.Content>
        <SectionHome />
        <SectionAbout />
        <SectionSkills />
        <SectionProject />
        <SectionContact />
        <FloatButton.BackTop
          type="primary"
          shape={"circle"}
          duration={1000}
          icon={
            <Icon
              fillClass="fill-gray-100"
              src={AiOutlineArrowUp} />
          } />
      </Layout.Content>
      <Footer />
    </Layout>
  )
}
