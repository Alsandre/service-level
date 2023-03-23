import IconButton from "../UI/IconButton";
import ProfileButton from "../UI/ProfileButton";

export function Header(): JSX.Element {
  return (
    <header className={"flex items-center justify-end gap-4 w-full h-16 bg-white pr-10 min-w-[915px]"}>
      <ProfileButton />
      <IconButton icon="notification" />
      <IconButton icon="logout" />
    </header>
  );
}
