import {v4 as keyGen} from 'uuid';

export default function ShopAddress (props: {addresses: string[]}): JSX.Element {
    return <div className={'flex gap-6'}>
        <span>Shop</span>
        <select className={'w-40 h-8 rounded-xl shadow-md'} name="shop-address" id="select-shop">
            {props.addresses.map(address => <option key={keyGen()} value="N.Ramishvili 33">{address}</option>)}
        </select>
    </div>
}