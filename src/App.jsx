import "./App.css";
import CardItem from "./components/CardItem";
import SearchBox from "./components/SearchBox";
import LinkList from "./components/LinkList/LinkList";
import { data } from "./data";
import { listItems } from "./listItems";
import AddComment from "./components/AddComment";
import CardItemList from "./components/CardItemList";
import ItemDetaill from "./components/ItemDetaill";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FoodDetailPage from "./pages/FoodDetailPage";

function App() {
  return (
    <>
    <FoodDetailPage/>
      {/* <HomePage/> */}
    {/* <Header/> */}
      {/* <CardItem {...data[0]} />
      <SearchBox />
      <LinkList title="Recent" links={listItems} />
      <AddComment/> */}
      {/* <CardItemList dataCardList={data} /> */}
      {/* <ItemDetaill {...data[0]} />
      <Footer /> */}
    </>
  );
}

export default App;
