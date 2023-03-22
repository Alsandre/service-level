import IconButton from "../UI/IconButton";


export default function ActionOptions (): JSX.Element {

    return <div className={'flex gap-6 mr-6'}>
        <IconButton icon='filter-symbol' className={'opacity-50'} />
        <IconButton icon='sort' className={'opacity-50'} />
    </div>
}