import style from './productCard.module.css';

export default function CartList({id, name, group, price, quantity, updateCartList}) {

    return (
      <div className={style.card}>
          <ul className={style.card_list}>
            <li>name: {name}</li>
            <li>group: {group}</li>
            <li>price: {price * quantity}</li>
            <li>
                <p>quantity: 
                <button onClick={() => updateCartList(id)}>+</button>
                {quantity}
                <button onClick={() => updateCartList(id, true)}>-</button>
                </p>
            </li>
          </ul>
      </div>
    )
}