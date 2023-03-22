import Aside from "./Aside";
import MainNavigation from "./MainNavigation";

export default function Header(): JSX.Element {
  return (
    <header className={"w-full h-16 pl-4 pr-10 flex bg-white justify-between min-w-[828px]"}>
      <Aside />
      <MainNavigation />
    </header>
  );
}
