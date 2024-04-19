import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
//import mission from "/Eyosias.jpg";
//import alem from "/Alemfire.png";
import axios from "axios";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3001/news/getNews");
        console.log(res.data.news);
        setNews(res.data.news);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="news">
        <header>
          <h2>
            Latest News<span className="underline"></span>
          </h2>
        </header>

        <div className="sub-container">
          {news.map((item) => (
            <div className="sub-news" key={item.id}>
              <img src={item.newsImage} alt={item.newsTitle} />

              <div>
                <h2>{item.newsTitle}</h2>
                <p>{item.newsBody}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default News;
