import {IProps} from '../../types';
import * as React from 'react';
import './Burger.css';
interface Props {
    items: IProps[];
    total: number;
}
const Burger:React.FC<Props> = ({items, total}) => {
    return (
        <div className='burgerWrapper'>
            <h3 className='burgerTitle'>Burger</h3>
            <div className="Burger">
                <div className="BreadTop">
                    <div className="Seeds1"></div>
                    <div className="Seeds2"></div>
                </div>
                {items.map((ingredient) => (
                    <div key={crypto.randomUUID()} className={ingredient.name}></div>
                ))}
                <div className="BreadBottom"></div>
            </div>
            <p className='total'><strong>Price: {total}</strong></p>
        </div>
    );
};

export default Burger;