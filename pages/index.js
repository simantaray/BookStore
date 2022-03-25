import Head from "next/head";
import Header from "../comps/Header";
import TopHeader from "../comps/TopHeader";
import TopTen from "../comps/TopTen";

export default function Home({ items, cards }) {
  return (
    <>
      <Head>
        <title>SNOW</title>
      </Head>
      {/* header */}
      <body className="relative ">
        <div className="fixed z-50">
          <Header />
        </div>

        <TopHeader />
        <TopTen />
      </body>
    </>
  );
}
// export async function getStaticProps() {
//   const items = await fetch("https://links.papareact.com/pyp").then((res) =>
//     res.json()
//   );
//   const cards = await fetch("https://links.papareact.com/zp1").then((res) =>
//     res.json()
//   );
//   return {
//     props: {
//       items: items,
//       cards: cards,
//     },
//   };
// }
