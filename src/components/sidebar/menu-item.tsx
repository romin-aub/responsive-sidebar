import { cn } from '@/lib/utils';
import type { IMenuListItem } from '@/types/menu-type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const { label, icon, href, enabled } = item;

  if (!enabled) return null;
  return (
    <button
      key={label}
      type='button'
      className={cn(
        'flex justify-start items-center w-full rounded-sm h-14 cursor-pointer hover:bg-secondary-30 hover:text-primary-30',
        isActive && 'bg-secondary-10 hover:bg-secondary-10 text-primary-30',
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
      <span className='text-base'>{t(label)}</span>
    </button>
  );
};
