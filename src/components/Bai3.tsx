import React, { useEffect, useState } from "react";
import axios from "axios";

interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  published_at: string;
  url: string;
}

const Bai3: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setArticles(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Bài 3: Ứng dụng xem tin tức</h2>
      {articles.map((a: Article) => (
        <div
          key={a.id}
          style={{ borderBottom: "1px solid #ccc", marginBottom: 15 }}
        >
          <img src={a.image_url} alt={a.title} width="200" />
          <h3>{a.title}</h3>
          <p>{a.summary}</p>
          <a href={a.url} target="_blank" rel="noopener noreferrer">
            Xem chi tiết
          </a>
          <p>
            <i>Ngày đăng: {new Date(a.published_at).toLocaleDateString()}</i>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bai3;
