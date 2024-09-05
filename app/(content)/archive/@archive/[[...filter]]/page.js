import NewsList from "@/app/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";
async function FilteredHeader({ year, month }) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;
  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("invalid Filter");
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }
  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }
  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonths = filter?.[1];

  return (
    <>
      {/* <Suspense fallback={<p>Loading filter...</p>}>
        <FilteredHeader year={selectedYear} month={selectedMonths} />
      </Suspense> */}
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredHeader year={selectedYear} month={selectedMonths} />
        <FilteredNews year={selectedYear} month={selectedMonths} />
      </Suspense>
    </>
  );
}
