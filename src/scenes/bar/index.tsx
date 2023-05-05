import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="柱狀圖" subtitle="展示柱狀圖" />
      <Box height="75vh">
        <BarChart isDashboard={false} />
      </Box>
    </Box>
  );
};

export default Bar;
