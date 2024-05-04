import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import newsImage from "../../public/logo1.jpg";
// import axios from "axios";
// import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const News = () => {
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:3001/news/getNews");
  //       console.log(res.data.news);
  //       setNews(res.data.news);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <>
      <Navbar />
      <div className="news">
        <header>
          <h2 data-aos="fade-right" className="animation">
            Latest News<span className="underline"></span>
          </h2>
        </header>

        <div className="sub-container">
          <div className="sub-news animation" data-aos="fade-right">
            <img src={newsImage} alt="news image" />

            <div>
              <h2>News Title</h2>
              <p>
                This is not a real news, It is just for a demo purpose it will
                be filled out with an original news content!
              </p>
            </div>
          </div>
        </div>

        {/* <div className="sub-container">
          {news.map((item) => (
            <div
              className="sub-news animation"
              key={item.id}
              data-aos="fade-right"
            >
              <img src={item.newsImage} alt={item.newsTitle} />

              <div>
                <h2>{item.newsTitle}</h2>
                <p>{item.newsBody}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default News;
