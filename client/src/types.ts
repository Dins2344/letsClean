export interface Service {
  _id: { $oid: string };
  name: string;
  work: {
    name: string;
    price: string;
  }[];
}


export interface Package {
  package0: {
    name: string;
    price: string;
  };
  package1: {
    name: string;
    price: string;
  };
  package2: {
    name: string;
    price: string;
  };
}



