/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {  CardActionArea } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CategoryContent = ({ toy }) => {
  const {
    _id,
    toy_name,
    toy_img,
    toy_category,
    toy_price,
    toy_description,
    toy_rating,
  } = toy;
  console.log(
    toy_name,
    toy_category,
    toy_img,
    toy_price,
    toy_rating,
    toy_description,
    _id
  );

  return (
    <div>
      <Tabs forceRenderTabPanel defaultIndex={0}>
        <TabList className={"flex gap-20"}>
          <Tab>Sports Toy</Tab>
        </TabList>

        <TabPanel>
          <Tabs forceRenderTabPanel>
            <TabList>
              <Tab>{toy_category}</Tab>
            </TabList>
            <TabPanel>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={toy_img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {toy_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {toy_price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {toy_rating}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Box sx={{ '& button': { m: 1 } }}>
                    <div>
                    <Button variant="contained" color="secondary" size="medium">
          Medium
        </Button>
                    </div>
                </Box>
               
              </Card>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryContent;
