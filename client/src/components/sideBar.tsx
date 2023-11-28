import { useEffect } from "react";
import { Package } from "../types";

interface Props {
  packages: Package;
}

const SideBar: React.FC<Props> = ({ packages }) => {
  useEffect(() => {
    console.log(packages)
    
  },[packages])
  return (
    <>
      <div className="w-full flex flex-col">
        {/* <h3>{packages.package0.name}</h3>
        <h3>{packages.package1.name}</h3>
        <h3>{packages.package2.name}</h3> */}
      </div>
    </>
  );
};

export default SideBar;
