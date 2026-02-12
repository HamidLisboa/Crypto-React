import React from "react";
import aboutImg from "../assets/images/about.png";

const AboutUsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-info p-3 rounded">
          <h3>About Us</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7 mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde illum,
          atque eaque cupiditate nihil harum, soluta ducimus inventore, fugiat
          quis veniam eos esse laborum provident exercitationem. Unde voluptates
          rerum atque corporis consectetur. Ratione culpa, nostrum odit aut
          excepturi exercitationem ea ipsum mollitia praesentium, perferendis
          provident eaque alias? Suscipit assumenda optio facilis maxime
          exercitationem. Nostrum ipsa temporibus tempore distinctio aspernatur
          necessitatibus, qui illum error illo, totam aperiam assumenda animi
          quo non quaerat? Saepe voluptas autem cupiditate atque voluptatibus,
          dicta excepturi dolores sed optio reprehenderit unde officia nemo aut
          error quos architecto eaque recusandae quibusdam dolorem, quod ullam.
          Non magni ut tempora?
        </div>
        <div className="col-md-5 text-center">
          <img
            src={aboutImg}
            alt="About Image"
            className="img-fluid about-img"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
