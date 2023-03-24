type TProps = {
  icon: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  alt?: string;
};

export default function ({ icon, className, onClick, alt }: TProps): JSX.Element {
  return (
    <button onClick={onClick}>
      <img
        className={`w-6 h-6 ${className ? className : ""}`}
        src={`/assets/${icon}.png`}
        alt={alt}
      />
    </button>
  );
}
