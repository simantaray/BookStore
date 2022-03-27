import Head from "next/head";
import FriendsRecommendations from "../comps/FriendsRecommendations";
import Header from "../comps/Header";
import TopHeader from "../comps/TopHeader";
import TopTen from "../comps/TopTen";
import ContinueReading from "../comps/ContinueReading";
export default function Home({ items, cards }) {
  return (
    <>
      <Head>
        <title>SNOW</title>
      </Head>
      {/* header */}
      <div className="relative ">
        <div className="fixed z-50">
          <Header />
        </div>

        <TopHeader />
        <TopTen />
        <div className="hidden xl:block z-50 fixed right-0 top-[100px] ">
          <FriendsRecommendations />
        </div>
        <ContinueReading/>
        
      </div>
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
