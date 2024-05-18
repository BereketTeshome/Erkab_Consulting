//import newsImage from "../../public/logo1.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const News = () => {
  const [news, setNews] = useState([]);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://erkab-consulting-sezq.vercel.app/news/getNews"
        );
        console.log(res.data.news);
        setNews(res.data.news);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleRead = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="news">
      <header>
        <h2 data-aos="fade-right" className="animation">
          Latest News<span className="underline"></span>
        </h2>
      </header>

      <div className="sub-container">
        {news.map((item) => (
          <div
            className="sub-news animation"
            key={item.id}
            data-aos="fade-right"
          >
            <img src={item.newsImage} alt={item.newsTitle} />

            <div>
              <h2>{item.newsTitle}</h2>
              <p>
                {readMore || item.newsBody.length < 90
                  ? item.newsBody
                  : `${item.newsBody.substring(0, 90)}...`}
                {item.newsBody.length > 90 && (
                  <button className="readMore-btn" onClick={() => handleRead()}>
                    {readMore ? " _Show Less" : " _Show More"}
                  </button>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
