
export type TShopData = {
  address: string;
  amount: string;
  date: string;
  delivered: string;
  inTime: string;
  number: string;
  ordered: string;
  serviceLevel: string;
}[];

export type TItemData = {
  address: string;
  item: string;
  delivered: string;
  inTime: string;
  number: string;
  ordered: string;
  serviceLevel: string;
}[];

export const itemTableColumns = [
  { Header: "Number", accessor: "number" },
  { Header: "Item", accessor: "item" },
  { Header: "Ordered", accessor: "ordered" },
  { Header: "Delivered", accessor: "delivered" },
  { Header: "In time", accessor: "inTime" },
  { Header: "Service Level", accessor: "serviceLevel" },
  { Header: "Product category", accessor: "productCategory" },
];

export const shopTableColumns = [
  { Header: "Number", accessor: "number" },
  { Header: "Date", accessor: "date" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Ordered", accessor: "ordered" },
  { Header: "Delivered", accessor: "delivered" },
  { Header: "In time", accessor: "inTime" },
  { Header: "Service Level", accessor: "serviceLevel" },
  { Header: "Adrress", accessor: "address" },
];

