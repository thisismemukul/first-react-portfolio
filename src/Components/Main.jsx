import React from 'react'
import { Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Box, Container, Grid, styled, Paper, Button } from '@mui/material/';

const Main = (props) => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'transparent',
        boxShadow: 'none',
    }));
    const RedButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#FF0000'),
        margin: '12px auto',
        border: '2px solid #FF0000',
        backgroundColor: '#FF0000',
        '&:hover': {
            backgroundColor: 'transparent',
            border: '2px solid #FF0000',
        },
        transition: '0.5s',
    }));
    const RedOutLineButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText('#FF0000'),
        margin: '12px auto',
        border: '2px solid #FF0000',
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: '#FF0000',
        },
        transition: '0.5s',
    }));

    return (
        <>
            <Container maxWidth="xl">
                <Box>
                    <Grid className="containerG" container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Item>
                                <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" className="mainDiv">
                                    <code>{props.codeLeft} <span>{props.codeSpan}</span> {props.codeRight}</code>
                                    <h1 className={props.homeHeading}><span>{props.nameSpan}</span> {props.name}</h1>
                                    <p>{props.para}</p>
                                    <NavLink exact className="btnLink" to={props.toFirst}>
                                        <RedButton className="me-3" variant="contained">{props.btnFirst}</RedButton>
                                    </NavLink>
                                    <NavLink exact className="btnLink" to={props.toSecond}>
                                        <RedOutLineButton className="me-3" variant="contained">{props.btnSecond}</RedOutLineButton>
                                    </NavLink>
                                </div>
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Item data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1000" >
                                <Image className='imgBox' src={props.imgSrc} alt="Home Page " fluid />
                            </Item>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Main;



