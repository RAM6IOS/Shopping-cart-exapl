import { useDispatch } from "react-redux";
import React, { useState } from "react";
import data from "../pages/data.json";
import Footers from "./Footer";
import Contents from "./Content";
import Filter from "./filter";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

export default function Page() {
    const [dat, useDat] = useState(data.products);
    const [size, useSize] = useState("");
    const [sort, useSort] = useState("");
    const [cartiems, useCartiems] = useState([]);

    //const datlength= dat.length;
    const cartiemss = cartiems.length;
    console.log(cartiemss);

    const addToCart = (i) => {
       // console.log(cartiems);
       //const cartiemss = cartiems.length;
        console.log(cartiems.length);

        cartiems.slice();
        let alreadyInCart = false;

        cartiems.forEach((item) => {
            if (item._id === i._id) {
                item.count++;
                //item.datlength++;
                alreadyInCart = true;
                cartiems.push(dat.length++)
            }
        });

        if (!alreadyInCart) {
            cartiems.push({ ...i, count: 1 });
        }
        //useCartiems(cartiems)
    };

    function sortProducts(i) {
        console.log(i.target.value);
        useSort(i.target.value),
            useDat(
                data.products
                    .slice()
                    .sort((a, b) =>
                        sort === "lowest"
                            ? a.price < b.price
                                ? 1
                                : -1
                            : sort === "Highest"
                            ? a.price > b.price
                                ? 1
                                : -1
                            : a._id < b.price
                            ? 1
                            : -1
                    )
            );

    }

    function filterProducts(i) {
        console.log(dat);
        if (i.target.value === "") {
            useSize(i.target.value), useDat(data.products);
        } else {
            useSize(i.target.value);
            useDat(
                data.products.filter(
                    (product) =>
                        product.availableSizes.indexOf(i.target.value) >= 0
                )
            );
        }
    }

    return (
        <>
            <Layout>
                <Header>
                    <h2>shopeng</h2>
                </Header>
                <Content>
                    <Filter
                        cont={dat.length}
                        size={size}
                        sort={sort}
                        sortProducts={sortProducts}
                        filterProducts={filterProducts}
                    />

                    <Contents
                        dat={dat}
                        cartiems={cartiems}
                        addToCart={addToCart}
                        cartiemss={cartiemss}
                    />
                </Content>
                <Footer>
                    <Footers />
                </Footer>
            </Layout>
        </>
    );
}
