import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import diverse from "./diverse.avif";
import { FaWpforms } from "react-icons/fa";
import Contact from "./Contact";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <div id="site-face" className="bg-transpar">
        <div>
          <img id="homePic" src={diverse} />
        </div>
        <div>
          <h1>FundBox</h1>
          <p className="fs-6">Crowdfunding can help you raise funds</p>
          <p>Click to explore ongoing campaigns</p>
          <div>
            <button
              className="btn btn-outline-light  shadow px-5"
              onClick={() => {
                navigate("/explore");
              }} style={{fontFamily:"Lato"}}
            >
              Explore Campaigns
            </button>
          </div>
        </div>
      </div>
      <div className="crowdFunding ">
        <h2 className="">Why should you crowd fund your idea ??</h2>
        <div className="">
          <div className="row mb-0 w-100 mx- px-5 text-white">
            <div className="col-7 fs- fw-">
              <p className="fs-4">
                Capital doesn’t come so easy to entrepreneurs these days. In
                2012, the total number of loans and money distributed in the
                U.S. via the Small Business Administration has dropped as much
                as 20 percent!
              </p>

              <p className="mt-4 fs-4">
                Also, nearly 98%of the business plans received by accredited
                investors and VC’s are rejected. Without a doubt, the current
                business-funding environment is in need of disruption.
              </p>
              <a
          style={{ marginLeft: "", textDecoration: "underline" }}
          target="blank"
          href="https://www.forbes.com/sites/tanyaprive/2012/10/12/top-10-benefits-of-crowdfunding-2/?sh=54d940e62c5e"
        >
          Read the full article on Forbes...
        </a>
            </div>
            <div className="col-5">
              <img
                src="https://cdn.corporatefinanceinstitute.com/assets/cash-money-1024x635.jpg"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* <p className="fs-4 fw-normal w-auto w-">
          One such disruption is the rising industry of crowdfunding, which
          involves a platform, an individual or entity in need of decent funding, and a
          community of people willing to collectively contribute these funds in
          exchange for rewards and recognition. The amount of money raised by
          crowdfunding platforms during 2012 is expected to reach $2.8 billion,
          up 91% since 2011.
        </p> */}
      
      </div>
      <div className="crowdFunding">
        <h2 className="fw-">It's quick and takes just 3 steps.</h2>
        <div className="row mx-auto text-white text-center justify-content-center mb-5">
          <div className="col-3 bg-success mx-5 py-5">
            <i class="bi bi-person-lines-fill display-1"></i>
            <p className="mt-4 fs-5">Register yourself</p>
          </div>
          <div className="col-3 bg-success mx-5 py-5">
            <i class="bi bi-ui-checks display-1"></i>
            <p className="mt-4 fs-5">Apply for your campaign</p>
          </div>
          <div className="col-3 bg-success mx-5 py-5">
            <i class="bi bi-bank2 display-1"></i>
            <p className="mt-4 fs-5">Start collecting funds</p>
          </div>
        </div>
        <h2 >Still confused ? Let us help you.</h2>
        <p className="fs-4 w-75 text-center fw-normal mx-auto">
          Making a decision can be hard, we know that and that's why you can
          count on us.{" "}
        </p>
        <p className="fs-4 w-75 mx-auto text-center fw-normal">
          Whatever you wish to listen from us, just tell it.
        </p>
        <div>
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}
export default Home;
