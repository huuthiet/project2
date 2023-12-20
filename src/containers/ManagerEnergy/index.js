import React from 'react';

import {
  Grid, 
  Paper,
  Card, 
  CardActions,
  CardContent,
  CardMedia,  
  Button,
  Typography
} from '@material-ui/core';
// import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import './style.scss';


const ManagerEnergy = props => {

  // const layouts = getLayoutsFromSomewhere();
  const layouts = [
    { i: '1', x: 0, y: 0, w: 1, h: 1 },
    { i: '2', x: 1, y: 0, w: 1, h: 1 },
    { i: '3', x: 2, y: 0, w: 1, h: 1 },
    // Thêm các ô khác tương tự
  ];

  const inlineStyles = {
    color: 'blue',
    fontSize: '16px',
    border: '1px solid #ccc',
    padding: '10px',
    backgroundColor: 'lightgray',
    height: '100px',
  };

  return (
    <div className="container">
      {/* <Helmet>
        <title>Energy</title>
        <meta name="description" content="Description of Energy" />
      </Helmet> */}
      <Grid lg={10} container spacing={2}>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/cuc-dep-hinh-nen-thien-nhien.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tủ 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Thông số last update
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant="contained" size="small">Xem chi tiết</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/cuc-dep-hinh-nen-thien-nhien.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tủ 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Thông số last update
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant="contained" size="small">Xem chi tiết</Button>  
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/cuc-dep-hinh-nen-thien-nhien.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tủ 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Thông số last update
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant="contained" size="small">Xem chi tiết</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/cuc-dep-hinh-nen-thien-nhien.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tủ 4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Thông số last update
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant="contained" size="small">Xem chi tiết</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/cuc-dep-hinh-nen-thien-nhien.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tủ 5
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Thông số last update
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant="contained" size="small">Xem chi tiết</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/cuc-dep-hinh-nen-thien-nhien.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Tủ 6
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Thông số last update
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant="contained" size="small">Xem chi tiết</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}


// export default compose(withConnect)(CreateRoom);
export default ManagerEnergy;
