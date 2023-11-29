import { useEffect } from "react";
import { Package } from "../types";

interface Props {
  packages: Package[];
}

const SideBar: React.FC<Props> = ({ packages }) => {
  useEffect(() => {
    console.log(packages);
  }, [packages]);
  return (
    <>
      <div className="w-full flex flex-col">
        {packages.map((item,i) => {
          return (
            
              <h3 key={i}>{item.name}</h3>
            
          );
        })}
      </div>
    </>
  );
};

export default SideBar;
