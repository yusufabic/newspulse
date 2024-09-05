import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "../../components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <div>News Page</div>
      <NewsList news={news} />
    </>
  );
}
