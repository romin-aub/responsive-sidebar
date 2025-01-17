import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMenuListItem } from "@/types";

interface IMenuItemProps {
  item: IMenuListItem;
  isActive: boolean;
  onClick: (href: string) => void;
}

const MenuItem: React.FC<IMenuItemProps> = ({ item, isActive, onClick }) => {
  const { label, icon, href, enabled } = item;

  if (!enabled) return null;
  return (
    <div
      key={label}
      className={cn(
        "flex justify-start items-center rounded-sm h-14 cursor-pointer hover:bg-gray-100",
        isActive && "bg-gray-200"
      )}
      onClick={() => onClick(href)}
    >
      <div className="h-full w-14 flex items-center justify-center">
        <FontAwesomeIcon icon={icon} size="xl" />
      </div>
      <span className="text-base">{label}</span>
    </div>
  );
};

export default MenuItem;
