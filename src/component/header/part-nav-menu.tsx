import { useState } from 'react';
import * as _ from "lodash";
import { Menu, Drawer, Avatar } from 'antd';
import { AiOutlineMenu, AiOutlineDoubleRight } from 'react-icons/ai';
import { Icon, Img } from '@provider/asset';
import { useWindowMedia, useWindowEvent, activeSection, useWindowLoad } from '@provider/hooks';
import { MENU_ITEMS, DEF_SELECTED_MENU, MENU_KEY } from './const';
import { MenuKey, MenuOnSelect } from './interface';


const { profile } = Img
export function PartNavMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const [collapse, setCollapse] = useState<boolean>(true);
  const [activeMenu, setActiveMenu] = useState<MenuKey[]>(['home']);

  const menuOnSelect: MenuOnSelect = ({ selectedKeys }) => {
    setActiveMenu(selectedKeys as MenuKey[])
  }

  const menuEventHandler = () => {
    const section = activeSection<MenuKey>();
    if (_.includes(MENU_KEY, section)) {
      setActiveMenu([section])
    }
  }

  const burgerHandler = () => {
    setOpen(true);
  }

  const closeDrawer = () => {
    setOpen(false);
  }

  useWindowMedia('md', () => setOpen(false));
  useWindowLoad(menuEventHandler);
  useWindowEvent("scroll", menuEventHandler);

  return (
    <>
      <button className={`block md:hidden hover_blur
        h-7 w-7 p-1 rounded-full`}
        aria-label='toggle-button'
        onClick={burgerHandler}>
        <Icon
          fillClass='fill-gray-800 dark:fill-gray-100'
          src={AiOutlineMenu} />
      </button>

      <Drawer rootClassName={`block md:hidden px-0 bg-transparent`}
        className='drawer_navigation overflow-hidden'
        title={(
          <Avatar className={`
           bg-gray-600 my-2 justify-self-center
            cursor-pointer`}
            src={profile.url}
            size={55} />
        )}
        open={open}
        placement="left"
        width={"fit-content"}
        closable={false}
        headerStyle={{
          display: 'grid',
          justifyContent: "center",
          padding: '0px'
        }}
        bodyStyle={{ padding: '0px' }}
        footerStyle={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "3px 6px"
        }}
        onClose={closeDrawer}
        footer={(
          <button className={`
            ${collapse ? '' : 'rotate-180'} flex_centerxy
            h-7 w-7 rounded-full duration-500 hover_blur`}
            aria-label='theme-button'
            onClick={() => setCollapse(!collapse)}>
            <AiOutlineDoubleRight />
          </button>
        )}>
        <Menu className={`border-none bg-transparent`}
          mode={"inline"}
          items={MENU_ITEMS}
          defaultSelectedKeys={DEF_SELECTED_MENU}
          selectedKeys={activeMenu}
          onSelect={menuOnSelect}
          inlineCollapsed={collapse}
          disabledOverflow={true}
          onClick={closeDrawer} />
      </Drawer>

      <Menu className={`border-none hidden md:block bg-transparent`}
        mode={"horizontal"}
        items={MENU_ITEMS}
        defaultSelectedKeys={DEF_SELECTED_MENU}
        selectedKeys={activeMenu}
        onSelect={menuOnSelect}
        disabledOverflow={true} />
    </>
  )
}