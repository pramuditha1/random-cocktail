import * as React from "react";
import Box from "@mui/joy/Box";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Lable from "../components/Lable";
import ButtonComp from "../components/Button";
import FavouriteListItem from "../components/FavouriteListItem";

export interface FavouriteItemsPropTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const FavouriteItems: React.FC<FavouriteItemsPropTypes> = ({
  open,
  setOpen,
}) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <ModalDialog
        aria-labelledby="nested-modal-title"
        aria-describedby="nested-modal-description"
        sx={(theme) => ({
          [theme.breakpoints.only("xs")]: {
            top: "unset",
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: 0,
            transform: "none",
            maxWidth: "unset",
          },
        })}
      >
        <Lable text="Favourite Items" variant="h4" />
        <FavouriteListItem name="Tequila Surprise" addItem={() => {}} removeItem={() => {}} image="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xjhjdf1630406071.jpg" />
        <FavouriteListItem name="Tequila Surprise" addItem={() => {}} removeItem={() => {}} image="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xjhjdf1630406071.jpg" />
        <Box
          sx={{
            mt: 1,
            display: "flex",
            gap: 1,
            flexDirection: { xs: "column", sm: "row-reverse" },
          }}
        >
          <ButtonComp
            text="Checkout"
            variant="contained"
            color="primary"
            onClickHandler={() => setOpen(false)}
          />
          <ButtonComp
            text="Cancle"
            variant="outlined"
            color="inherit"
            onClickHandler={() => setOpen(false)}
          />
        </Box>
      </ModalDialog>
    </Modal>
  );
};

export default FavouriteItems;
