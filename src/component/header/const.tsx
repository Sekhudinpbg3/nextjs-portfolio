import { Typography } from 'antd';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlinePaperClip,
  AiOutlineDownload
} from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { MdAlternateEmail, MdConnectWithoutContact } from "react-icons/md";
import { SOSMEDS } from "@component/section-home/const";
import { Menu, Item, MenuItems } from "@provider/antd/util";
import { Icon, Public } from '@provider/asset';
import { HOME, ABOUT, SKILLS, PROJECTS, CONTACT } from "@provider/types/const";
import { MenuKey } from "@provider/types/interface";

const { cv } = Public.file;
export const MENU_KEY: MenuKey[] = ['home', 'about', 'skills', 'projects', 'contact'];
export const DEF_SELECTED_MENU: MenuKey[] = ['home'];


const SUB_MEDSOS = SOSMEDS.map<Item>(({ username, type, url, icon: IconSosmed }, key) => (
  Menu.item<MenuKey>(
    <Typography.Link className='menu_item_title'
      href={url}
      target={'_blank'}>
      {username}
    </Typography.Link>,
    `connect-me${key}` as MenuKey,
    <Icon src={IconSosmed} />
  )
))


export const MENU_ITEMS: MenuItems = [
  Menu.item<MenuKey>(
    <Typography.Link href={HOME.href} className='menu_item_title'>
      {HOME.title}</Typography.Link>, HOME.id,
    <div className='block md:hidden'><AiOutlineHome /></div>
  ),
  Menu.item<MenuKey>(
    <Typography.Link href={ABOUT.href} className='menu_item_title'>
      {ABOUT.title}</Typography.Link>, ABOUT.id,
    <div className='block md:hidden'><AiOutlineUser /></div>
  ),
  Menu.item<MenuKey>(
    <Typography.Link href={SKILLS.href} className='menu_item_title'>
      {SKILLS.title}</Typography.Link>, SKILLS.id,
    <div className='block md:hidden'><BsCodeSlash /></div>
  ),
  Menu.item<MenuKey>(
    <Typography.Link href={PROJECTS.href} className='menu_item_title'>
      {PROJECTS.title}</Typography.Link>, PROJECTS.id,
    <div className='block md:hidden'><AiOutlinePaperClip /></div>
  ),
  Menu.item<MenuKey>(
    <Typography.Link href={CONTACT.href} className='menu_item_title'>
      {CONTACT.title}</Typography.Link>, CONTACT.id,
    <div className='block md:hidden'><MdAlternateEmail /></div>
  ),
  Menu.sub<MenuKey>(
    <p className='menu_item_title block md:hidden'>Connect Me</p>, 'connect-me', SUB_MEDSOS,
    <div className='block md:hidden'><MdConnectWithoutContact /></div>
  ),
  Menu.item<MenuKey>(
    <p className='menu_item_title block md:hidden'>Resume</p>, 'resume',
    <a className='block md:hidden'
      target="_blank"
      href={cv.url}
      download={cv.name}>
      <AiOutlineDownload />
    </a>
  ),
];