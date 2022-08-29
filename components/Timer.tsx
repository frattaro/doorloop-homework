import { css } from "@emotion/react";
import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Timer: React.FC<{ time: number }> = ({ time }) => {
  return (
    <Box
      css={css`
        position: relative;
        display: inline-flex;
      `}
    >
      <CircularProgress
        variant="determinate"
        value={Math.max(0, (time * 100) / 60)}
        color={time < 10 ? "error" : time < 30 ? "warning" : "success"}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {time}
      </Box>
    </Box>
  );
};

export default Timer;
