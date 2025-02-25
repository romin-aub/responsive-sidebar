import { Languages } from '@/config/languages';
import { cn } from '@/lib/utils';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import { useTranslation } from 'react-i18next';

export const LanguageChanger: React.FC<{ closeSheet?: () => void }> = ({
  closeSheet,
}) => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    closeSheet?.();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex text-sm gap-3 items-center outline-none'>
        <div
          typeof='button'
          title='Change Language'
          className='border-2 border-secondary-30 cursor-pointer h-9 w-9 flex items-center justify-center bg-secondary-10 text-primary-10 shadow hover:bg-secondary-30'
        >
          <FontAwesomeIcon icon={faLanguage} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={cn(
          ' m-2 min-w-[8rem] overflow-hidden rounded-sm border border-secondary-30 bg-secondary-30 p-1 shadow-md',
        )}
      >
        {Languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={cn(
              'p-1 relative hover:bg-secondary-40 cursor-pointer flex select-none items-center gap-2 rounded-sm px-2 py-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
              language.code === i18n.language &&
                'bg-secondary-10 hover:bg-secondary-10 text-primary-30',
            )}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
