type TProps = {
  icon: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function ({ icon, className, onClick }: TProps): JSX.Element {
  return (
    <button onClick={onClick}>
      <img
        className={`w-6 h-6 ${className ? className : ""}`}
        src={`/assets/${icon}.png`}
        alt=""
      />
    </button>
  );
}
