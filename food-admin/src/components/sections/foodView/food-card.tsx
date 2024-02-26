"use client"
import { useContext, useState } from "react";
import { foodContext } from "@/context/foodProvider";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

import { fCurrency } from "@/utils/format-number";

import Label from "@/components/label";

// ----------------------------------------------------------------------

export default function FoodCard({ food }: any) {
  const { deleteFood } = useContext(foodContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderStatus = (
    <Label
      variant="filled"
      color={(food.status === "sale" && "error") || "info"}
      sx={{
        zIndex: 9,
        top: 16,
        right: 16,
        position: "absolute",
        textTransform: "uppercase",
      }}
    >
      {food.status}
    </Label>
  );

  const renderImg = (
    <Box
      component="img"
      alt={food.name}
      src={food.image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: "text.disabled",
          textDecoration: "line-through",
        }}
      >
        {food.priceSale && fCurrency(food.priceSale)}
      </Typography>
      &nbsp;
      {fCurrency(food.price)}
    </Typography>
  );

  return (
    <Card
      sx={{
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      <Box sx={{ pt: "100%", position: "relative" }}>
        {food.status && renderStatus}

        {renderImg}
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover" variant="subtitle2" noWrap>
          {food.name}
        </Link>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {renderPrice}
          <Popover
            id={food._id}
            anchorEl={anchorEl}
            open={open}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <EditOutlinedIcon />
              Edit
            </MenuItem>

            <MenuItem
              onClick={() => {
                deleteFood(food._id), handleClose();
              }}
              sx={{ color: "error.main" }}
            >
              <DeleteForeverOutlinedIcon />
              Delete
            </MenuItem>
          </Popover>
        </Stack>
      </Stack>
    </Card>
  );
}
