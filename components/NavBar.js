import Link from "next/link";
import {useRouter} from "next/router";
import styles from "../pages/NavBar.module.css";

export default function NavBar(){
  const router = useRouter();
  /*
  return (
    <nav>
      // style.module.css를 이용한 방식
      <Link href="/">
        <a className={[
          styles.link,
          router.pathname === "/" ? styles.active : ""
        ].join(" ")}>
          Home
        </a>
      </Link>
      <Link href="/about">
        <a className={`${styles.link} ${router.pathname === "/about" ? styles.active : ""}`}>About</a>
      </Link>
    </nav>
  )
  */
  return (
    // style JSX를 이용한 방식
    <nav>
      <img src="/vercel.svg" />
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.5px;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
        .active {
          color: tomato;
        }
      `}</style>
    </nav>
  )
}