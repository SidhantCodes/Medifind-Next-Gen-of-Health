import styles from "./style";
import {  Navbar, Hero, Stats, About } from "./components";

const App = () => (
  <div className="bg-[#FDFDF5] w-full overflow-hidden ">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#FDFDF5] ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>
    
    <div className={`bg-[#FDFDF5] ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats/>
        <About/>
      </div>
    </div>
  </div>
);

export default App;
