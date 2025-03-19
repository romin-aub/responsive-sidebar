import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/core/data-display/accordion';
import type { IMenuListHeader } from '@/types/menu-type';
import { getRoleId } from '@/utils/get-role-id';
import { useUser } from '@clerk/nextjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const { user } = useUser();
  const roleId = getRoleId(user?.unsafeMetadata.role as string);

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
              <span className='text-base'>{t(label)}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {items
              .filter((item) => item.roles.includes(roleId as number))
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
