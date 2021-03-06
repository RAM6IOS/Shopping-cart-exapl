import React, { useState } from "react";
import datas from "../pages/data.json";
import { Card, Avatar } from "antd";
import {
    EditOutlined,
    EllipsisOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import styles from "../styles/card.module.css";
const { Meta } = Card;
export default function Cards(props) {
    //const [dat, satDat] = useState(datas.products);
    return (
        <>
            <div className="row">
                {props.dat.map((dats, index) => (
                    <div className="col-sm-6 col-md-6 col-xl-4 " key={index}>
                        <Card
                            className={styles.pdengcard}
                            style={{ width: 300 }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                            }
                            actions={[]}
                        >
                            <Meta avatar={<Avatar />} title={dats.title} />
                            <div className={`row ${styles.spis}  `}>
                                <div className="col">
                                    <h6 className={styles.padonglife}>
                                        {dats.price}

                                    </h6>
                                </div>
                                <div className="col">
                                    <button onClick={()=>props.addToCart(dats) }>Ditels</button>
                                </div>
                            </div>
                        </Card>
                        ,
                    </div>
                ))}
            </div>
        </>
    );
}
