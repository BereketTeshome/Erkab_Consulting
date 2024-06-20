import axios from "axios";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [readMore, setReadMore] = useState(false);

  // Sample data to use if the API call fails or returns empty
  const sampleNews = [
    {
      id: 1,
      newsImage:
        "https://firebasestorage.googleapis.com/v0/b/destiny-academy-daa04.appspot.com/o/erkab.jpg?alt=media&token=425d711d-f275-48dc-af2b-34480b1318cb",
      newsTitle:
        "Business Development Intensive Training for leather-based MSMEs finalized",
      newsBody:
        "Five days of Intensive training on Business Development Services- (BDS) for Micro Small and Medium Enterprises (MSMEs) is finalized Friday 8/12/2022. trainees were drawn from Adama, Modjo, and Bishoftu it was learned. According to Eyosias Dires, CEO of Erkab Consulting firm, the training mainly encompasses; Design Thinking, Business Model Canvas, Marketing Management, Human Resource Management, Financial Management, and others. “The final purpose of the training is to enable trainees to develop self-confidence, strengthen and expand their business, increase income and create additional job opportunities,” He said The trainees further shared their knowledge and experiences among themselves and discussed how to strengthen their networking among themselves, relevant stakeholders and business partners, and others. In his closing remarks, Modjo deputy mayor Tsegaye Tekletsadik said that such initiatives enable MSMEs to fully utilize available potentials in the leather sector by creating green job opportunities for unemployed youth in their respective areas.",
    },
    {
      id: 2,
      newsImage: "/march8.jpg",
      newsTitle: "March 8 was celebreted",
      newsBody:
        "Master salesmanship and marketing training was given for EBC's marketing team",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://erkabconsulting.com/server/news/getNews",
          { withCredentials: true }
        );
        console.log(res.data.news);
        setNews(res.data.news.length > 0 ? res.data.news : sampleNews);
      } catch (error) {
        console.error(error);
        setNews(sampleNews);
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
        {news?.map((item) => (
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
