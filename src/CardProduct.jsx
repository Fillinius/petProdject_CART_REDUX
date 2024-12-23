import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export function CardProduct(product) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader

        title={product.title}

      />
      <CardMedia
        component="img"
        height="194"
        image={product.img}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Here to be  discription.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share">
          <AddShoppingCartIcon aria-label="cart" />
        </IconButton>

      </CardActions>

    </Card>
  );
}