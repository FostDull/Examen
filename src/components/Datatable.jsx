import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Buttons from "./Buttons";

const columns = [
  { field: "n", headerName: "N", width: 70 },
  { field: "name", headerName: "Name", width: 130 },

  {
    field: "cost",
    headerName: "Cost",
    type: "number",
    width: 90,
  },
  {
    field: "img",
    headerName: "Image",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <>
      <Paper sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
      <Buttons
        onDelete={() => console.log("delete")}
        disabled={rows.length === 0}
        onToggleAdd={() => console.log("toggle add")}
      />
    </>
  );
}
