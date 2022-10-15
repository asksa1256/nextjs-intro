// index.js's blueprint
// next.js will call this file automatically. (before call index.js)
import "../styles/globals.css";
import Layout from "../components/Layout";

export default function App({Component, pageProps}){
  return (
    <Layout>
      <Component {...pageProps}/>
      {/* <style jsx global>{`
        a {
          text-decoration: none;
        }
        .active {
          color: tomato;
        }
      `}</style> */}
    </Layout>
  )
}