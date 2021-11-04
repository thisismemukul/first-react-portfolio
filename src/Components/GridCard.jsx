import React from 'react'
import {styled, Paper, Grid, Button,Card,CardActionArea,CardMedia,CardContent,Typography,CardActions } from '@mui/material/';

const GridCard = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
        boxShadow: 'none',
    }));
  
    return (
        <>
            <Grid item xs={12} md={4}>
                <Item data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <Card sx={{margin: '10px', maxWidth: 400, backgroundColor: '#FF0000' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={props.imgSrc}
                                alt="green iguana"
                            />
                            <CardContent className="text-light">
                                <Typography gutterBottom variant="h5" component="div">
                                    {props.title}
                                </Typography>
                                <Typography  className="text-light" variant="body2" color="text.primary">
                                   {props.discription}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Item>
            </Grid>
        </>
    )
}

export default GridCard;
