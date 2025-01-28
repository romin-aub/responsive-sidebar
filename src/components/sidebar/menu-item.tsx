import { cn } from '@/lib/utils';
import type { IMenuListItem } from '@/types/menu-type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IMenuItemProps {
  item: IMenuListItem;
  isAccordionItem: boolean;
  isActive: boolean;
  onClick: (href: string) => void;
}

export const MenuItem: React.FC<IMenuItemProps> = ({
  item,
  isAccordionItem,
  isActive,
  onClick,
}) => {
  const { label, icon, href, enabled } = item;

  if (!enabled) return null;
  return (
    <button
      key={label}
      type='button'
      className={cn(
        'flex justify-start items-center w-full rounded-sm h-14 cursor-pointer hover:bg-gray-100',
        isActive && 'bg-gray-200',
        isAccordionItem ? 'h-12' : 'h-14',
      )}
      onClick={() => onClick(href)}
    >
      <div
        className={cn(
          'h-full flex items-center justify-center',
          isAccordionItem ? 'w-12' : 'w-14',
        )}
      >
        <FontAwesomeIcon icon={icon} size='lg' />
      </div>
      <span className='text-base'>{label}</span>
    </button>
  );
};
