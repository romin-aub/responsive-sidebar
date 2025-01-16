import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IMenuItemProps {
  label: string;
  icon: IconProp;
  href: string;
  isActive: boolean;
  onClick: (label: string, href: string) => void;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  label,
  icon,
  href,
  isActive,
  onClick,
}) => {
  return (
    <div
      key={label}
      className={cn(
        "flex justify-start items-center rounded-sm h-14 cursor-pointer hover:bg-gray-100",
        isActive && "bg-gray-200"
      )}
      onClick={() => onClick(label, href)}
    >
      <div className="h-full w-14 flex items-center justify-center">
        <FontAwesomeIcon icon={icon} size="xl" />
      </div>
      <span className="text-base">{label}</span>
    </div>
  );
};

export default MenuItem;
