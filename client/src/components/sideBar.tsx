import { useEffect, useState } from "react";
import { Package } from "../types";

interface Props {
  packages: Package[];
}

interface orderData{
  packages: { name: string, price: string }[],
  totalAmount:number
}

const SideBar: React.FC<Props> = ({ packages }) => {
  const [orderTotal,setOrderTotal] = useState(0)
  useEffect(() => {
    calculateTotal()
  }, [packages])
  
  const calculateTotal = () => {
    let total = 0
    packages.forEach((item) => {
      if (item.price.length) {
        total = parseInt(total.toString()) + parseInt(item.price)
      }
    })
    setOrderTotal(total)
  }

  const handleCheckout = () => {
    const data:orderData = { packages: [], totalAmount: orderTotal }
    packages.forEach((item) => {
      if (item.name.length) {
        data.packages.push(item)
      }
    })

    console.log(data)
  }

  return (
    <>
      <div className="w-full flex flex-col px-5">
        {packages.map((item, i) => {
          return (
            <div key={i} className="flex justify-between">
              <h3>{item.name}</h3>
              <h4>{item.price}</h4>
            </div>
          );
        })}
        {orderTotal >= 0 && <h3>total amount: {orderTotal}</h3>}
        
        <button onClick={handleCheckout}>checkout</button>
      </div>
    </>
  );
};

export default SideBar;
