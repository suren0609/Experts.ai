import Block3 from "../Block3/Block3";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import HeadBlock from "../HeadBlock/HeadBlock";
import Header from "../Header/Header";
import HowItWorks from "../HowItWorks/HowItWorks";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <HeadBlock />
      <HowItWorks />
      <Block3 />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
