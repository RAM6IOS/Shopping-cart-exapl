import React, { useState } from "react";
import data from "../pages/data.json";
import Cards from "./Cards";
import Cards2 from "./Cards2"
import styles from "../styles/card.module.css";

export default function Content({ addToCart,cartiems, dat }) {
    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-8 col-xl-8 ">
                    <Cards dat={dat} addToCart={addToCart} />
                </div>
                <div
                    className={` col-sm-12 col-md-4 col-xl-4 ${styles.bordar} `}
                >
                    <Cards2 cartiems={cartiems} dat={dat} />
                </div>
            </div>
        </>
    );
}
