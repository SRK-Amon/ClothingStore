import about1 from "../assets/images/info_img1.png";
import about2 from "../assets/images/info_img2.png";
import about3 from "../assets/images/info_img3.png";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about_box">
          <h1 className="about_box_title">Our products undergo strict quality control at every stage of production.</h1>
          <div className="about_mini_box">
            <p className="about_mini_box_text">We pay special attention to the quality of every item in our store.</p>
            <p className="about_mini_box_text">We use only carefully selected materials that ensure durability and comfort while wearing.</p>
            <p className="about_mini_box_text">Every detail — from the stitching to the hardware — is thoroughly checked so that you receive a product that lasts long and continues to please you with its appearance and comfort.</p>
          </div>
          <div className="about_img_box">
            <img src={about1} alt="" className="about_img" />
            <img src={about2} alt="" className="about_img" />
            <img src={about3} alt="" className="about_img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
