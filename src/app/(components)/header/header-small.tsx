import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/sheet";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarHeader from "../sidebar/sidebar-header";
import SidebarMenu from "../sidebar/sidebar-menu";
import SidebarProfile from "../sidebar/sidebar-profile";

const HeaderSmall: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <FontAwesomeIcon icon={faBars} size="xl" />
      </SheetTrigger>
      <SheetContent className="h-full flex flex-col lg:hidden">
        <SheetTitle>
          <SidebarHeader />
        </SheetTitle>
        <div className="flex-1 overflow-auto lg:my-3 my-0">
          <SidebarMenu />
        </div>
        <SheetFooter>
          <SheetClose>
            <SidebarProfile />
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default HeaderSmall;
