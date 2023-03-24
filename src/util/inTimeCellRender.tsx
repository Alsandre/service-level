import Icon from "../components/Icon"

export function inTimeCellRender (cellValue: string, hoverState: boolean) {
    if(cellValue === 'Yes') {
        return <Icon icon="check" className="w-[14px] h-[14px]" />
    }else if(cellValue === 'No')return <Icon icon="cross" className="w-[14px] h-[14px]"  />
    else return null;
}