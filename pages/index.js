import Head from "next/head";
import Header from "../comps/Header";
import TopHeader from "../comps/TopHeader";

export default function Home({ items, cards }) {
  return (
    <div>
      <Head>
        <title>SNOW</title>
      </Head>
      {/* header */}
      <body className="relative ">
        <div className="fixed opacity-25">
          <Header />
        </div>

        {/* <TopHeader /> */}
      </body>
    </div>
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
