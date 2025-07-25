import BookGroup from "../components/book/BookGroup";
import { books } from "../assets/data/books";
import PageLayout from "../layouts/PageLayout";
import BannerSlider from "../components/common/BannerSlider";

function LandingPage() {
  return (
    <PageLayout>
      <BannerSlider />
      <BookGroup bookList={books} />
    </PageLayout>
  );
}

export default LandingPage;
