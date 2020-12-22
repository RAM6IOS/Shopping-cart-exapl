import React,{useEffect} from 'react'

export default function Cards2({cartiems ,dat}) {
useEffect(()=>{

  console.log("length", cartiems.length)
})
//const {cartiems}= props;
console.log(cartiems.length)

  return (
      <>
          {cartiems.length === 0 ? (
              <div>Cart is empty</div>
          ) : (
              <div>
                  You have {cartiems.length}
                  in the cart
              </div>
          )}
          <div>{cartiems.length}</div>

          <div>
              {cartiems.map((itm) => (
                  <div key={itm._id}>
                      <p>{itm.title}</p>
                      <p>{itm.price}</p>

                  </div>
              ))}
          </div>
      </>
  );
}
