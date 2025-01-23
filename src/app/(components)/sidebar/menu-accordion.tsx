import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { IMenuListHeader } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./menu-item";
import { useEffect, useState } from "react";

interface IMenuAccordionProps {
  sidebarHeader: IMenuListHeader;
  activeMenu: string;
  onClick: (href: string) => void;
}

const MenuAccordion: React.FC<IMenuAccordionProps> = ({
  sidebarHeader,
  activeMenu,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(
      sidebarHeader.items.some((subItem) => subItem.href === activeMenu)
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
        type="single"
        collapsible
        value={isOpen ? label : ""}
        onValueChange={toggleAccordion}
      >
        <AccordionItem key={label} value={label}>
          <AccordionTrigger>
            <div className="flex justify-start items-center rounded-sm h-14 cursor-pointer hover:bg-gray-100">
              <div className="h-full w-14 flex items-center justify-center">
                <FontAwesomeIcon icon={icon} size="xl" />
              </div>
              <span className="text-base">{label}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {items.map((subItem) => (
              <MenuItem
                key={subItem.label}
                item={subItem}
                isAccordionItem
                isActive={activeMenu === subItem.href}
                onClick={onClick}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MenuAccordion;
