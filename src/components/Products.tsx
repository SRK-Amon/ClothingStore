import  { ProductsArr } from "../Product"

import dline from "../assets/images/discount_line.svg"

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="products_box">
          <ul className="products_list">
            <li><a href="#!" className="products_link"><span>T-SHIRTS</span></a></li>
            <p className="products_line">|</p>
            <li><a href="#!" className="products_link"><span>POLO SHIRTS</span></a></li>
            <p className="products_line">|</p>
            <li><a href="#!" className="products_link"><span>Tank tops</span></a></li>
            <p className="products_line">|</p>
            <li><a href="#!" className="products_link"><span>ACCESORIES</span></a></li>
            <p className="products_line">|</p>
            <li><a href="#!" className="products_link"><span>Pants</span></a></li>
          </ul>
          <div className="products_card_box">
            {
              ProductsArr.map(product  =>(
                <div className="card_box" key={product.id}>
                  <img src={product.image} alt="" className="card_box_img" />
                  <h3 className="card_box_title">{product.name}</h3>
                  <p className="card_box_brand">{product.brand}</p>
                  <div className="card_mini_box">
                    <p className="card_mini_box_price">${product.price}</p>
                    <button className="card_mini_box_btn">ADD TO CART</button>
                  </div>
                  <img src={product.like} alt="" className="card_box_like" />
                  {product.discount && (<p className="card_box_discount"><img src={dline} alt="" /></p>) }
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
