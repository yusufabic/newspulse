import Link from "next/link";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHedaer() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <img src={logoImg.src} alt="A plate food on it" />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
