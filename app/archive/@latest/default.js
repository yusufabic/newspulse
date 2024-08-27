import NewsList from "@/app/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  const lastNews = getLatestNews();
  return (
    <>
      <h2>Latest News </h2>
      <NewsList news={lastNews} />
    </>
  );
}
