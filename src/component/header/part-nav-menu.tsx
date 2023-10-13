import { useState } from 'react';
import * as _ from "lodash";
import { Menu, Drawer } from 'antd';
import { AiOutlineMenu, AiOutlineDoubleRight } from 'react-icons/ai';
import { Icon } from '@provider/asset';
import { useWindowMedia, useWindowEvent, activeSection, useWindowLoad } from '@provider/hooks';
import { MenuKey } from "@provider/types/interface";
import { MENU_ITEMS, DEF_SELECTED_MENU, MENU_KEY } from './const';
import { MenuOnSelect } from './interface';


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

  useWindowMedia('md', closeDrawer);
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
        title={<div className='w-5 h-5' />}
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
            ${collapse ? '' : 'rotate-180'} group duration-500 my-2 rounded-full
            flex_centerxy h-8 w-8 hover:bg-black/10 hover:dark:bg-white/10`}
            name='menu-collaps'
            aria-label='menu-collaps'
            onClick={() => setCollapse(!collapse)}>
            <Icon
              sizeClass='w-6 h-6'
              fillClass='fill-gray-600 dark:fill-blue-600'
              src={AiOutlineDoubleRight} />
          </button>
        )}>
        <Menu className={`border-none bg-transparent`}
          mode={"inline"}
          items={MENU_ITEMS}
          defaultSelectedKeys={DEF_SELECTED_MENU}
          selectedKeys={activeMenu}
          onSelect={menuOnSelect}
          inlineCollapsed={collapse}
          triggerSubMenuAction='hover'
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