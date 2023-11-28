import Options from "../components/options";
import SideBar from "../components/sideBar";

const HomePage: React.FC = () => {

    const data = [
      {
        _id: {
          $oid: "6565c975b0db79debece503c",
        },
        name: "Deep Cleaning",
        work: [
          {
            name: "Laundry cleaning services",
            price: "200",
          },
          {
            name: "Upholstery cleaning services",
            price: "300",
          },
        ],
      },
      {
        _id: {
          $oid: "6565c9c5b0db79debece503d",
        },
        name: "Home services",
        work: [
          {
            name: "House cleaning services",
            price: "200",
          },
          {
            name: "Deep cleaning services",
            price: "300",
          },
          {
            name: "Window cleaning services",
            price: "400",
          },
          {
            name: "Carpet cleaning services",
            price: "500",
          },
          {
            name: "Pressure washing services",
            price: "600",
          },
        ],
      },
      {
        _id: {
          $oid: "6565ca1fb0db79debece503e",
        },
        name: "Car Wash",
        work: [
          {
            name: "Soft Touch Car Washes",
            price: "200",
          },
          {
            name: "No-Touch Car Wash",
            price: "300",
          },
        ],
      },
    ];
  return (
    <>
      <h3>this is home page</h3>
      <div className="w-full h-[100vh] flex">
        <div className="w-3/12 h-full">
          <SideBar></SideBar>
        </div>
        <div className="w-9/12 h-full">
          <Options data = {data}></Options>
        </div>
      </div>
    </>
  );
};

export default HomePage;
