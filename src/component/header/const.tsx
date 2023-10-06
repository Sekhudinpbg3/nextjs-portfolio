import { Typography } from 'antd';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlinePaperClip,
  AiOutlineDownload
} from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { Menu, MenuItems } from "@provider/antd/util";
import { Icon } from '@provider/asset';
import { MenuKey } from './interface';

export const MENU_KEY: MenuKey[] = ['home', 'about', 'skills', 'project', 'contact']
export const DEF_SELECTED_MENU: MenuKey[] = ['home']
export const MENU_ITEMS: MenuItems = [
  Menu.item<MenuKey>(
    <Typography.Link href='#home' className='menu_item_title'>Home</Typography.Link>, 'home',
    <div className='block md:hidden'><AiOutlineHome /></div>
  ),
  Menu.item<MenuKey>(
    <Typography.Link href='#about' className='menu_item_title'>About</Typography.Link>, 'about',
    <div className='block md:hidden'><AiOutlineUser /></div>
  ),
  Menu.item<MenuKey>(
    <Typography.Link href='#skills' className='menu_item_title'>Skills</Typography.Link>, 'skills',
    <div className='block md:hidden'><BsCodeSlash /></div>
  ),
  Menu.item<MenuKey>(
    <Typography.Link href='#project' className='menu_item_title'>Project</Typography.Link>, 'project',
    <div className='block md:hidden'><AiOutlinePaperClip /></div>
  ),
  Menu.item<MenuKey>(
    <Typography.Link href='#contact' className='menu_item_title'>Contact</Typography.Link>, 'contact',
    <div className='block md:hidden'><MdAlternateEmail /></div>
  ),
  Menu.item<string>(
    <p className='menu_item_title block md:hidden'>Resume</p>, 'resume',
    <Icon src={AiOutlineDownload}
      divClass='block md:hidden -ml-1.5 mt-1.5'
      className='bg-blue-600/20 p-1 rounded-full'
      fillClass='fill-blue-700'
      sizeClass='h-7 w-7' />
  )
];