import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Blog</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All posts</Link>
          </li>
          <li>
            <Link href="/new-meetup">Add a new post </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
