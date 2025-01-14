import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import ClearIcon from '@mui/icons-material/Clear';
import { memo } from "react";

// eslint-disable-next-line react/display-name
export const OptionListCard = memo(({ item, props }) => {
  const style = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
  return (
    <div style={style}>
      <p><strong>{item.title} </strong> </p>
      <div >
        {/* <p>Count-{item.count}</p> */}
        <Button onClick={() => props.onClickPlus(item.id)}>{<AddIcon />}</Button>
        <Button onClick={() => props.onClickMinus(item.id)}>{<RemoveIcon />}</Button>
        {/* <Button onClick={() => props.onClickRemove(item.id)}>{<ClearIcon />}</Button> */}
      </div>
    </div>
  )
})