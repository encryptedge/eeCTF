import Navbar from "../components/navbar";
import News from "../components/news";

function NewsHome() {
  return (
    <>
      <Navbar pageTitle={"News"} />
      <News />
    </>
  );
}

export default NewsHome;
