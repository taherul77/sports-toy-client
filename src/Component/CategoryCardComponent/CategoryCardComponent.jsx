
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Star from '../Star/Star';

const CategoryCardComponent = () => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.ibb.co/j35FCVG/Vegetarian-chilli-206c469.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='flex gap-14'>
        <Button size="small" color="primary">
          Share
        </Button>
       
        <Star></Star>

      
        
      </CardActions>
      
    </Card>
            
        </div>
    );
};

export default CategoryCardComponent;



