import Head from "next/head";
import styles from "../styles/Home.module.css";

export const getServerSideProps = async () => {
  console.log("API_KEY", process.env.API_KEY);

  return {
    props: {
      hasApiKey: !!process.env.API_KEY,
    },
  };
};

export default function About({ hasApiKey }: { hasApiKey: boolean }) {
  return (
    <>
      <Head>
        <title>About Page {hasApiKey}</title>
      </Head>

      <main className={styles.main}>About Page {hasApiKey}</main>
    </>
  );
}
