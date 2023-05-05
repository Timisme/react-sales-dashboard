import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="折線圖" subtitle="展示折線圖" />
      <Box height="75vh">
        <LineChart isDashboard={false} isCustomLineColors={false} />
      </Box>
    </Box>
  );
};

export default Line;
