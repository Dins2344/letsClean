import { Package } from "../types";

interface Props {
  packages: Package[];
}

const SideBar: React.FC<Props> = ({ packages }) => {
  return (
    <>
      <div className="w-full flex flex-col">
        {packages.map((item) => {
          return <h3>{item.name}</h3>;
        })}
      </div>
    </>
  );
};

export default SideBar;
