import Navbar from "../components/Navbar";
import { PricesArray } from "../constants/constant";
import { GiCheckMark } from "react-icons/gi";

function Pricing() {
  return (
    <>
      <Navbar />
      <div className="pricing">
        <header>
          <h1>
            OUR <span>PRICING</span>
          </h1>
        </header>
        <div className="services__container">
          {PricesArray.map((item) => {
            return (
              <div key={item.id}>
                <article className="service">
                  <div className="service_head">
                    <h3>{item.title}</h3>
                  </div>

                  <ul className="service__list">
                    <li>
                      <GiCheckMark className="service__list-icon" />{" "}
                      <p>{item.desc}</p>
                    </li>
                  </ul>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Pricing;
