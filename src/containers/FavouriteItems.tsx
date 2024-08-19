import * as React from "react";
import Box from "@mui/joy/Box";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Lable from "../components/Lable";
import ButtonComp from "../components/Button";
import FavouriteListItem from "../components/FavouriteListItem";
import { useDispatch, useSelector } from "react-redux";
import { makeSelectFavouriteCocktails } from "../store/selectors";
import { addFavourite, removeFavourite } from "../store/reducers/favouritesSlice";

export interface FavouriteItemsPropTypes {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const FavouriteItems: React.FC<FavouriteItemsPropTypes> = ({
  open,
  setOpen,
}) => {
  const dispatch = useDispatch();
  const favouriteCocktails = useSelector(makeSelectFavouriteCocktails);

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
        <Lable text="Favourite Items" variant="h4" className="text-center" />
        <div className="overflow-y-auto max-h-[60vh] p-2">
          {favouriteCocktails &&
            favouriteCocktails.map((item, key) => {
              console.log("fav item : ", item);
              return (
                <FavouriteListItem
                  key={key}
                  name={item.name}
                  addItem={() => dispatch(addFavourite(item))}
                  removeItem={() => dispatch(removeFavourite({id: item.id}))}
                  image={item.image}
                  quantity={item.quantity}
                />
              );
            })}
        </div>
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
            text="Cancel"
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
