import { useEffect, useState } from "react";
import Options from "../components/options";
import { Package, Service } from "../types";
import SideBar from "../components/sideBar";

const HomePages = () => {
  const [services, setServices] = useState<Service[]>();
  const [packages, setPackages] = useState<Package[]>([]);
  useEffect(() => {
    getAllServices();
  }, []);

  const getAllServices = async () => {
    const { data } = await (
      await fetch("http://localhost:3000/user/get-all-services")
    ).json();
    console.log(data);
    setServices(data);
  };
  return (
    <>
      <h3 className="text-3xl">this is home page</h3>

      <div className="w-full h-[100vh] flex">
        <div className="md:w-3/12 w-4/12 ">
          <h3>sidebar</h3>
          <SideBar packages={packages}></SideBar>
        </div>
        <div className=" md:w-9/12 w-8/12">
          <h3>options</h3>
          {services && (
            <Options
              packages={packages}
              setPackage={setPackages}
              data={services}
            ></Options>
          )}
        </div>
      </div>
    </>
  );
};

export default HomePages;
