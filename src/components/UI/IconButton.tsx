
type TProps = {
    icon: string;
    children?: React.ReactNode;
    className?: string;
}

export default function ({icon, className}: TProps): JSX.Element {
    return <button><img className={`w-6 h-6 ${className ? className : ''}`} src={`/assets/${icon}.png`} alt="" /></button>
}