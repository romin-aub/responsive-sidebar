import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/core/data-display/accordion';
import type { RootState } from '@/store/store';
import type { IMenuListHeader } from '@/types/menu-type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MenuItem } from './menu-item';

export interface IMenuAccordionProps {
  sidebarHeader: IMenuListHeader;
  activeMenu: string;
  onClick: (href: string) => void;
}

export const MenuAccordion: React.FC<IMenuAccordionProps> = ({
  sidebarHeader,
  activeMenu,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const roleId = useSelector((state: RootState) => state.auth.role);

  useEffect(() => {
    setIsOpen(
      sidebarHeader.items.some((subItem) => {
        if ('items' in subItem) {
          return subItem.items.some((subSubItem) => {
            if ('items' in subSubItem) return;
            return subSubItem.href === activeMenu;
          });
        }
        return subItem.href === activeMenu;
      }),
    );
  }, [activeMenu, sidebarHeader.items]);

  const toggleAccordion = (value: string | null) => {
    setIsOpen(value === label);
  };

  const { label, icon, enabled, items } = sidebarHeader;

  if (!enabled) return null;
  return (
    <div>
      <Accordion
        type='single'
        collapsible
        value={isOpen ? label : ''}
        onValueChange={toggleAccordion}
      >
        <AccordionItem key={label} value={label}>
          <AccordionTrigger>
            <div className='flex justify-start items-center rounded-sm h-14 cursor-pointer'>
              <div className='h-full w-14 flex items-center justify-center'>
                <FontAwesomeIcon icon={icon} size='xl' />
              </div>
              <span className='text-base'>{label}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {items
              .filter((item) => item.roles.includes(roleId))
              .map((subItem) =>
                'items' in subItem ? (
                  <MenuAccordion
                    key={subItem.label}
                    sidebarHeader={subItem}
                    activeMenu={activeMenu}
                    onClick={onClick}
                  />
                ) : (
                  <MenuItem
                    key={subItem.label}
                    item={subItem}
                    isAccordionItem
                    isActive={activeMenu === subItem.href}
                    onClick={onClick}
                  />
                ),
              )}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
