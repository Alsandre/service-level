
import IconButton from "../UI/IconButton";
import MarlinLogo from "../UI/MarlinLogo";


export default function Aside () : JSX.Element {

    return <div className={'w-[70px] h-[620px] bg-marlin mt-4 py-4 rounded-3xl flex flex-col justify-between'}>
        <div className={'w-[70px] h-[320px] flex flex-col gap-4 items-center justify-center'}>
            <MarlinLogo />
            <IconButton icon='customer' />
            <IconButton icon='shopping-bag' />
            <IconButton icon='catalog' />
            <IconButton icon='team-management' />
            <IconButton icon='invoice' />
            <IconButton icon='settings' />

        </div>
        <div className={'w-[70px] h-16 mb-8 flex flex-col gap-4 items-center justify-center'}>
            <IconButton icon='terms-and-conditions' />
            <IconButton icon='paper' />
        </div>
    </div>
}