import NewsList from "@/app/components/news-list";
import { getLatestNews } from "@/lib/news";

export default async function LatestNewsPage() {
  const lastNews = await getLatestNews();
  return (
    <>
      <h2>Latest News </h2>
      <NewsList news={lastNews} />
    </>
  );
}
