import React from 'react';
import { Box, Container, Grid } from '@mui/material/';
import GridCard from './Components/GridCard';
import Sdata from './Components/SData';

const Service = () => {
  
    return (
        <>
            <Container maxWidth="xl">
                <Box>
                    <section className="text-center mx-auto ">
                        <h1> <code>My Services</code></h1>
                        <h3><code>What Can I Do Best ?</code></h3>
                    </section>
                    <Grid  className="mx-auto align-content-center mb-5" container spacing={2}>
                        {Sdata.map((val, ind) => {
                            return <GridCard key={ind} imgSrc={val.imgSrc} title={val.title} discription={val.discription} />
                        })}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Service;