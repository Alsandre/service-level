import IconButton from "../UI/IconButton";
import ProfileButton from "../UI/ProfileButton";


export default function MainNavigation () : JSX.Element {

    return <div className={'flex items-center gap-4 pt-4'}>
        <ProfileButton />
        <IconButton icon='notification' />
        <IconButton icon='logout' />
    </div>
}