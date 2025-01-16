import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { IMenuListHeader } from "@/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuItem from "./menu-item";

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
  const { label, icon, items } = sidebarHeader;
  return (
    <div>
      <Accordion type="multiple">
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
                label={subItem.label}
                icon={subItem.icon}
                href={subItem.href}
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
