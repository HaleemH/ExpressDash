import React from 'react'
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  // { field: "id", headerName: "ID", width: 90 },
  {
    field: "Vendor",
    headerName: "Vendor",
    width: 150,
    editable: true,
  },
  {
    field: "Carrier",
    headerName: "Freight Company",
    width: 150,
    editable: true,
  },
  {
    field: "Time",
    headerName: "Time",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Pallets",
    headerName: "Pallets",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "Cases",
    headerName: "Cases",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "PO",
    headerName: "Purchase Order",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "Contact",
    headerName: "Contact Information",
    type: "string",
    width: 200,
    editable: true,
  },
  {
    field: "Comments",
    headerName: "Comments",
    type: "text",
    width: 250,
    editable: true,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];
const rows = [
  { id: 1, Vendor: "Snow", Carrier: "Jon", Time: 35, Pallets: 24, Cases: 960, PO: "123456789", Contact: "vendor@email.com", Comments: "Rush load. First priority!"},
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function Home() {

  
  return (
    <div className="dash-display">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          backgroundColor: "white",
        }}
      />
    </div>
  );
}
export default Home