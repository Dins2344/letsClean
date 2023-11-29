export interface Service {
  _id: { $oid: string };
  name: string;
  work: {
    name: string;
    price: string;
  }[];
}


export interface Package {
    name: string;
    price: string;
 
}



