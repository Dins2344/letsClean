import { useState } from "react";
import { Package, Service } from "../types";



interface Props {
    data: Service[],
    packages: Package,
    setPackage: React.Dispatch<React.SetStateAction<Package>>;

}

const Options: React.FC<Props> = ({ data,packages,setPackage }) => {


  return (
    <>
      <div className="w-full h-full">
        <h3>these are the options</h3>
        <div className="flex  flex-wrap">
          {data.map((item, i) => {
            return <WorkComponent key={i} index={i} item={item} packages={packages} setPackage={setPackage} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Options;


interface workProps {
  item: Service;
  index:number
  packages: Package;
  setPackage: React.Dispatch<React.SetStateAction<Package>>;
}

const WorkComponent: React.FC<workProps> = ({index, item,packages,setPackage }) => {
  const [checkedId, setCheckedId] = useState<string | null>(null);
  const handleCheck = (name: string,price:string) => {
    setCheckedId(name === checkedId ? null : name);
    const updatedPackage = packages
    for (const one in updatedPackage) {
      console.log(one)
      if (one === 'package' + index) {
        console.log('this is it')
        updatedPackage[one as keyof Package].name = name
        updatedPackage[one as keyof Package].price = price
      }
    }
    

    setPackage(updatedPackage)
      
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