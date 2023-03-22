import Aside from "./Aside";
import MainNavigation from "./MainNavigation";

export default function Header(): JSX.Element {
  return (
    <header className={"w-full h-16 px-4 flex bg-white justify-between min-w-[828px]"}>
      <Aside />
      <MainNavigation />
    </header>
  );
}
