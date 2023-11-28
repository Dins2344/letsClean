import { useEffect, useState } from "react";


interface Service {
  _id: { $oid: string };
  name: string;
  work: {
    name: string;
    price: string;
  }[];
}

interface Props {
  data: Service[];
}

const Options: React.FC<Props> = ({ data }) => {
  // useEffect(() => {
  //     getAllData()
  // }, [])

  // const getAllData = async () => {
  //     const data = await fetch("http://localhost:3000/user/api/all-services");
  //     console.log(data)
    // }
   
  return (
    <>
      <div className="w-full h-full">
        <h3>these are the options</h3>
        <div className="flex  flex-wrap">
          {data.map((item, i) => {
            return (
                <WorkComponent key={i} item={item}/>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Options;

interface workProps {
  item: {
    _id: { $oid: string };
    name: string;
    work: {
      name: string;
      price: string;
    }[];
  };
}

const WorkComponent: React.FC<workProps> = ({ item }) => {
  const [checkedId, setCheckedId] = useState<string | null>(null);
  const handleCheck = (name: string) => {
      setCheckedId(name === checkedId ? null : name);
      
  };
  return (
    <div className="w-1/3 flex flex-col  border-2">
      {item.name}
      {item.work.map((work, i) => {
        return (
          <div key={i}>
            <label htmlFor={work.name}>{work.name}</label>
            <input
              onChange={() => handleCheck(work.name)}
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
