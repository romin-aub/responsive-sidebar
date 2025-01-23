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
import { useState } from "react";

const HeaderSmall: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger>
        <FontAwesomeIcon icon={faBars} size="xl" />
      </SheetTrigger>
      <SheetContent className="h-full flex flex-col lg:hidden">
        <SheetTitle>
          <SidebarHeader />
        </SheetTitle>
        <div className="flex-1 overflow-auto scrollbar-none lg:my-3 my-0">
          <SidebarMenu closeSheet={() => setIsSheetOpen(false)} />
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
