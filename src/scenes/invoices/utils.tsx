import { Typography } from "@mui/material";

const getColumn = (colors: any) => [
  { field: "id", headerName: "ID" },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    cellClassName: "name-column--cell"
  },
  {
    field: "phone",
    headerName: "Phone Number",
    flex: 1
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1
  },
  {
    field: "cost",
    headerName: "Cost",
    flex: 1,
    renderCell: (params: any) => (
      <Typography color={colors.greenAccent[500]}>
        ${params.row.cost}
      </Typography>
    )
  },
  {
    field: "date",
    headerName: "Date",
    flex: 1
  }
];

export default getColumn;
