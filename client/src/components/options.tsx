import { useState } from "react";
import {  Service } from "../types";



interface Props {
  data: Service[];
  setPackage: (name: string, price: string, index: number) => void;
}

const Options: React.FC<Props> = ({ data, setPackage }) => {
 


  return (
    <>
      <div className="w-full h-full">
        <h3>these are the options</h3>
        <div className="flex  flex-wrap">
          {data.map((item, i) => {
            return <WorkComponent key={i} index={i} item={item}  setPackage={setPackage} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Options;


interface workProps {
  item: Service;
  index: number;
  setPackage: (name: string, price: string, index: number) => void;
}

const WorkComponent: React.FC<workProps> = ({index, item,setPackage }) => {
   const [checkedId, setCheckedId] = useState<string | null>(null);
   const handleCheck = (name: string, price: string) => {
     setCheckedId(name === checkedId ? null : name);
     if (checkedId === name) {
       setPackage("", "", index);
     } else {
       setPackage(name, price, index);
     }
   };
  return (
    <div className="w-1/3 flex flex-col  border-2">
      {item.name}
      {item.work.map((work, i) => {
        return (
          <div key={i}>
            <label htmlFor={work.name}>{work.name}</label>
            <input
              onChange={() => handleCheck(work.name,work.price)}
              checked={checkedId === work.name}
              id={work.name}
              type="checkbox"
            ></input>
          </div>
        );
      })}
    </div>
  );
};