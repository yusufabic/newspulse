import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "../../components/news-list";

export default function NewsPage() {
  return (
    <>
      <div>News Page</div>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
