import React from "react";

export default function filter(props) {
    return (
        <>
            <div>
                {props.cont}pruducts
                {props.size}
            </div>
            <div>
                order
                <select
                    name=""
                    id=""
                    value={props.sort}
                    onChange={props.sortProducts}
                >
                    <option>Latest</option>
                    <option value="lowest">lowest</option>
                    <option value="Highest">Highest</option>
                </select>
            </div>
            <div>
                Filter
                <select value={props.size} onChange={props.filterProducts}>
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>
        </>
    );
}
