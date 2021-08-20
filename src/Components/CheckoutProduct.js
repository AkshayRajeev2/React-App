import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider"

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{basket},dispatch] = useStateValue();
  
    // console.log(basket)
    // const removeFromBasket = (item) => {
    //     console.log(item)
    //     dispatch({
    //         action:'REMOVE_FROM_BASKET',
    //         item: {
    //             id: item
    //         }
    //     })
    // }
  
    const removeFromBasket = () =>{
  
      dispatch({
          type : "REMOVE_FROM_BASKET",
          item : {
            id : id,
            title : title,
            image : image,
            price : price,
            rating : rating
          }
      })
  
    }
    return (
      <div className="CHproduct">
          <img src={image} alt="" />
        <div className="CHproduct__info">
          <p>{title}</p>
          <p className="CHproduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="CHproduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          <button className='CHproductButton' onClick={removeFromBasket} >Remove From Basket</button>
        </div>
  
        
  
        
      </div>
    );
  }
export default CheckoutProduct