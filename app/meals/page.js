import MealsGrid from "@/components/meals/meals-grid";
import classes from "./page.module.css";
import Link from "next/link";
import { GetMeals } from "@/lib/meal";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browse the delicious meals sheared by our vibrant community.",
};

async function Meals() {
  const meals = await GetMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious melas, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. it is easy and fan
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
