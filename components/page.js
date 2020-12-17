import { useDispatch } from 'react-redux'
import data from "../pages/data.json"
import Cards from "./Cards"
import styles from "../styles/card.module.css";


export default function Page() {




  return (
      <>
          <header>
              <h2>shopeng</h2>
          </header>
          <main>
              <div className="row">
                  <div className="col-sm-12 col-md-8 col-xl-8 ">
                      <Cards data={data} />
                  </div>
                  <div className={` col-sm-12 col-md-4 col-xl-4 ${styles.bordar} `}>
                      .col-sm-3
                  </div>
              </div>
          </main>
          <footer>
              <h2>ditils</h2>
          </footer>
      </>
  );
}
