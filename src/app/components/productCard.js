import style from './productCard.module.css';

export default function ProductCard({id, name, group, msrp, price, status, updateCartList, quantity}) {
    const isSoldOut = status !== "Available";

    return (
      <div className={`${style.card} ${isSoldOut ? style.sold_out : ''}`}>
          <ul className={style.card_list}>
            <li>name: {name}</li>
            <li>group: {group}</li>
            <li>msrp: {msrp}</li>
            <li>price: {price}</li>
            {!isSoldOut && <li>quantity in cart: {quantity}</li>}
            {!isSoldOut && <button onClick={() => updateCartList(id)}>Add</button>}
            {isSoldOut && <li>Sold Out</li>}
          </ul>
      </div>
    )
}