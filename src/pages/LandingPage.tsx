import BookGroup from "../components/book/BookGroup";
import Banner from "../components/common/Banner";
import { books } from "../assets/data/books";
import PageLayout from "../layouts/PageLayout";

function LandingPage() {
  return (
    <PageLayout>
      <Banner />
      <BookGroup bookList={books} />
    </PageLayout>
  );
}

export default LandingPage;
