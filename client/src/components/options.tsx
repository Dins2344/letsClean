import { useState } from "react";
import { Package, Service } from "../types";



interface Props {
    data: Service[],
    packages: Package[],
    setPackage: React.Dispatch<React.SetStateAction<Package[]>>;

}

const Options: React.FC<Props> = ({ data,packages,setPackage }) => {


  return (
    <>
      <div className="w-full h-full">
        <h3>these are the options</h3>
        <div className="flex  flex-wrap">
          {data.map((item, i) => {
            return <WorkComponent key={i} item={item} packages={packages} setPackage={setPackage} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Options;


interface workProps {
  item: Service;
  packages: Package[];
  setPackage: React.Dispatch<React.SetStateAction<Package[]>>;
}

const WorkComponent: React.FC<workProps> = ({ item,packages,setPackage }) => {
  const [checkedId, setCheckedId] = useState<string | null>(null);
  const handleCheck = (name: string,price:string) => {
      setCheckedId(name === checkedId ? null : name);
      let updatedPackages 
            if (checkedId === name) {
                updatedPackages = packages.filter((pack) => pack.name !== name) 
            }else if()
        checkedId === name
          ? 
          : [...packages, { name, price }];
      setPackage(updatedPackages)
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