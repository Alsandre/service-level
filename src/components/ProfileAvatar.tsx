export default function ProfileAvatar(): JSX.Element {
  return (
    <button className={"flex items-center gap-2 mr-6"}>
      <span
        className={
          "w-10 h-10 rounded-full bg-marlin flex items-center justify-center"
        }
      >
        <img
          className={"w-[80%] h-[80%]"}
          src="/assets/user.png"
          alt="user avatar"
        />
      </span>
      <span className={"font-bold uppercase text-marlin"}>gdm</span>
    </button>
  );
}
