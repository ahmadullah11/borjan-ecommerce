import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ImageSlider from "../../components/ImageSlider";
import FavoritesSaleSection from "../../components/FavoritesSaleSection";
import ShopByCategories from "../../components/ShopByCategories";
import FavoritesWeddingSection from "../../components/FavoritesWeddingSection";
import ShopByCollection from "../../components/ShopByCollection";
import InstaStyleFeed from "../../components/InstaStyleFeed";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <ImageSlider />
        <FavoritesWeddingSection />
        <ShopByCategories />
        <FavoritesSaleSection />
        <ShopByCollection />
        <InstaStyleFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
