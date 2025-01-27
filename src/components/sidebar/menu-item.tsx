import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMenuListItem } from "@/types";

interface IMenuItemProps {
  item: IMenuListItem;
  isAccordionItem: boolean;
  isActive: boolean;
  onClick: (href: string) => void;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  item,
  isAccordionItem,
  isActive,
  onClick,
}) => {
  const { label, icon, href, enabled } = item;

  if (!enabled) return null;
  return (
    <div
      key={label}
      className={cn(
        "flex justify-start items-center rounded-sm h-14 cursor-pointer hover:bg-gray-100",
        isActive && "bg-gray-200",
        isAccordionItem ? "h-12" : "h-14"
      )}
      onClick={() => onClick(href)}
    >
      <div
        className={cn(
          "h-full flex items-center justify-center",
          isAccordionItem ? "w-12" : "w-14"
        )}
      >
        <FontAwesomeIcon icon={icon} size="lg" />
      </div>
      <span className="text-base">{label}</span>
    </div>
  );
};

export default MenuItem;
