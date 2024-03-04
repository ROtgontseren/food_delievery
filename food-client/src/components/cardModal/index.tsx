import * as React from "react";
import {
  Box,
  Button as MuiButton,
  Typography,
  Modal,
  Grid,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { Remove, Add, Close } from "@mui/icons-material";
import { Button } from "../core/button";
import {FoodContext } from "@/context/foodProvider";
import { useRouter } from "next/navigation";
import { BasketContext } from "@/context/basket";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  border: "2px solid #ffff",
  borderRadius: 5,
  boxShadow: 22,
  p: 4,
};

interface ICardModal {
  handleClose: () => void;
  open: boolean;
  food: any;
}

export default function CardModal({ handleClose, open, food }: ICardModal) {
  const { addBasket, loading } = React.useContext(BasketContext);

  const HandleSendFood = () => {
    addBasket(food);
    handleClose();
  };
  const router = useRouter();


  return (
    <Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container display={"flex"} flexDirection={"row"} gap={10}>
            <Grid item xs={5}>
              <img
                alt="food image"
                src={food.image}
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>

            <Grid
              item
              xs={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              gap={3}
            >
              <Grid item xs={2} position={"relative"}>
                <MuiButton
                  onClick={handleClose}
                  sx={{ ml: 80, position: "absolute", color: "black" }}
                >
                  <Close />
                </MuiButton>
              </Grid>
              <Grid item xs={12} sx={{margin: "auto" ,width: "400px" }}>
                <Stack sx={{gap:"12px"}}>
                  <Typography
                    id="modal-modal-title"
                    variant="h5"
                    fontSize={"32px"}
                    fontWeight={600}
                    component="h2"
                  >
                    {food.name}
                  </Typography>
                  <Typography
                    my={2}
                    id="modal-modal-description"
                    sx={{ color: "#18BA51" }}
                  >
                    {food.price}₮
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    fontWeight={600}
                    component="h2"
                  >
                    Орц
                  </Typography>
                  <Typography
                    id="modal-modal-description"
                    variant="body2"
                    bgcolor={"#F6F6F6"}
                    p={3}
                    borderRadius={4}
                    my={2}
                  >
                    {food.description}
                  </Typography>
                </Stack>
                <Stack sx={{paddingY:"24px"}}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    fontWeight={600}
                    component="h2"
                  >
                    Тоо ширхэг
                  </Typography>
                  <Box sx={{display: "flex", alignItems: "center",justifyContent:"space-evenly" }}>
                    <MuiButton>
                      <Remove
                        sx={{
                          bgcolor: "#18BA51",
                          color: "white",
                          width: "70%",
                          height: "30px",
                          py: 1,
                          borderRadius: 2,
                        }}
                      />
                    </MuiButton>
                     <Typography>1</Typography>
                    <MuiButton>
                      <Add
                        sx={{
                          bgcolor: "#18BA51",
                          color: "white",
                          width: "70%",
                          height: "30px",
                          py: 1,
                          borderRadius: 2,
                        }}
                      />
                    </MuiButton>
                  </Box>
                </Stack>

                <Button
                  label={"сагсанд хийх"}
                  // disabled={loading}
                  onClick={() => HandleSendFood()}
            
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Stack>
  );
}
