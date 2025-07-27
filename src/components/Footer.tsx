import email from "../assets/images/email_img.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="newsletter_box">
            <h3 className="newsletter_box_title">NEWSLETTER</h3>
            <label htmlFor="" className="newsletter_box_input">
              <input type="text" placeholder="Enter your email" className="newsletter_box_email" />
              <img src={email} alt="" className="newsletter_box_img" />
            </label>
          </div>
          <div className="footer_mini_box">
            <div className="item_box">
              <h4 className="item_box_title">ABOUT US</h4>
              <a href="#!" className="item_box_link">About us</a>
              <a href="#!" className="item_box_link">Privacy</a>
              <a href="#!" className="item_box_link">Contact</a>
            </div>
            <div className="item_box">
              <h4 className="item_box_title">CUSTOME CARE</h4>
              <a href="#!" className="item_box_link">FAQ</a>
              <a href="#!" className="item_box_link">Delivery info</a>
              <a href="#!" className="item_box_link">Payment</a>
            </div>
            <div className="item_box">
              <h4 className="item_box_title">CONTACT</h4>
              <a href="#!" className="item_box_link">OooTads</a>
              <a href="#!" className="item_box_link">SemiSafd</a>
              <a href="#!" className="item_box_link">shoploveweb.com</a>
              <a href="#!" className="item_box_link">+47 95 23 321 00</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
