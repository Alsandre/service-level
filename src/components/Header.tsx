import Icon from "./Icon";
import ProfileAvatar from "./ProfileAvatar";

export function Header(): JSX.Element {
  return (
    <header
      className={
        "flex items-center justify-end gap-4 w-full h-16 bg-white pr-10 min-w-[915px]"
      }
    >
      <ProfileAvatar />
      <Icon icon="notification" />
      <Icon icon="logout" />
    </header>
  );
}
