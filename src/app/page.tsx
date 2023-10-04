"use client";
import { Layout, FloatButton } from "antd";
import {
  Header,
  Footer,
  SectionHome,
  SectionAbout,
  SectionSkills,
  SectionPortfolio,
  SectionContact
} from "@component/index";

export default function Home() {
  return (
    <Layout className="relative">
      <Header />
      <Layout.Content>
        <SectionHome />
        <SectionAbout />
        <SectionSkills />
        <SectionPortfolio />
        <SectionContact />
        <FloatButton.BackTop />
      </Layout.Content>
      <Footer />
    </Layout>
  )
}
