"use client";
import dynamic from "next/dynamic";
import { Layout, FloatButton } from "antd";
const Header = dynamic(() => import("@component/header").then((mo) => mo.Header));
const Footer = dynamic(() => import("@component/footer").then((mo) => mo.Footer));
const SectionHome = dynamic(() => import("@component/section-home").then((mo) => mo.SectionHome));
const SectionAbout = dynamic(() => import("@component/section-about").then((mo) => mo.SectionAbout));
const SectionSkills = dynamic(() => import("@component/section-skills").then((mo) => mo.SectionSkills));
const SectionPortfolio = dynamic(() => import("@component/section-portfolio").then((mo) => mo.SectionPortfolio));
const SectionContact = dynamic(() => import("@component/section-contact").then((mo) => mo.SectionContact));

export default function Home() {
  return (
    <Layout className="relative w-full overflow-hidden">
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
