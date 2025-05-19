import Components from "../(home)/components/components";
import BlogBanner from "./components/blog-banner";
import PopularArticles from "./components/popular-articles";

export default function page() {
  return (
    <div>
      <BlogBanner />
      <PopularArticles />
      {/* <Components /> */}
    </div>
  );
}
