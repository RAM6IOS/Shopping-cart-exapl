import React from 'react'
import styles from "../styles/card.module.css";

export default function Footer() {
  return (
      <>
          <div className="row">
              <div className="col">
                  <div
                      className={` p-3 my-3 bg-dark text-white ${styles.pocshgen}`}
                  >
                      <h4>My First Bootstrap Page</h4>
                  </div>
              </div>
          </div>
      </>
  );
}
