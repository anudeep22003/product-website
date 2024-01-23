import { ModeToggle } from "../mode-toggle";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";

const Header = () => {
    return (
        <header className="flex justify-between">
            <Menubar className="border-0">
                <MenubarMenu>
                    <MenubarTrigger>Home</MenubarTrigger>
                    <MenubarTrigger>About</MenubarTrigger>
                    <MenubarTrigger>What we do</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
            <ModeToggle />
        </header>
    );
};

export default Header;
