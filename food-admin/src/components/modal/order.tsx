// "useClient";
// import { foodContext } from "@/context/foodProvider";
// import { Box, Card, Modal, Stack, Typography, CardMedia } from "@mui/material";
// import React, { useContext, useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";

// import { DefualtButton } from "..";
// import Image from "next/image";
// import { basketContext } from "@/context/basketProvider";
// import { alertContext } from "@/context/alertProvider";
// import { authContext } from "@/context/authProvider";
// import { useRouter } from "next/navigation";
// type Props = {};

// const OrderModal = () => {
//   const { openOrder, setOpenOrder, food } = useContext(foodContext);

//   const { user } = useContext(authContext);
//   const { alert } = useContext(alertContext);
//   const { addBasketItem } = useContext(basketContext);
//   const [count, setCount] = useState(1);
//   const router = useRouter();
//   const addToBasket = () => {
//     if (user) {
//       addBasketItem(food._id, count);
//       alert(`Таны сагсанд ${food.name}-ийн амжилттай нэмлээ`, "success");
//       setOpenOrder(false);
//     } else {
//       alert("Нэвтрэх шаардлагтай", "warning");
//       setOpenOrder(false);
//       router.push("/login");
//     }
//   };
//   return (
//     <Modal
//       open={openOrder}
//       onClose={() => {
//         setOpenOrder(false);
//       }}
//     >
//       <Card
//         className="md:w-10/12 max-w-[1000px] w-[380px]"
//         sx={{
//           position: "absolute" as "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           bgcolor: "background.paper",
//           boxShadow: 24,
//           p: 4,
//           borderRadius: "10px",
//         }}
//       >
//         <div className="md:flex relative">
//           <div
//             className="text-right md:absolute md:right-0 cursor-pointer"
//             onClick={() => {
//               setOpenOrder(false);
//             }}
//           >
//             <CloseIcon />
//           </div>
//           <img
//             src={food.image}
//             alt=""
//             className="md:w-[500px] md:h-[500px] w-full h-[300px] object-cover"
//           />
//           <Stack
//             spacing={7}
//             padding={5}
//             paddingTop={20}
//             sx={{ width: { md: "50%" } }}
//           >
//             <div>
//               <Typography variant="h4" fontWeight={600}>
//                 {food.name}
//               </Typography>
//               <Typography variant="h6" color="#18BA51">
//                 {food.price}₮
//               </Typography>
//             </div>
//             <div>
//               <Typography variant="h6" fontWeight={550}>
//                 Тайлбар
//               </Typography>
//               <div className="rounded-lg bg-slate-100 p-2">
//                 {food.description}
//               </div>
//             </div>
//             <div>
//               <Typography variant="h6" fontWeight={550}>
//                 Too
//               </Typography>
//               <div className="flex justify-between">
//                 <div>
//                   <DefualtButton
//                     text="-"
//                     buttonFunction={() => {
//                       setCount((old) => old - 1);
//                     }}
//                   />
//                 </div>
//                 <Typography>{count}</Typography>
//                 <div>
//                   <DefualtButton
//                     text="+"
//                     buttonFunction={() => {
//                       setCount((old) => old + 1);
//                     }}
//                   />
//                 </div>
//               </div>
//             </div>
//             <DefualtButton
//               text="Сагслах"
//               buttonFunction={() => {
//                 addToBasket();
//               }}
//             />
//           </Stack>
//         </div>
//       </Card>
//     </Modal>
//   );
// };

// export default OrderModal;
