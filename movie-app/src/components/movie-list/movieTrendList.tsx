import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { MovieDataType } from '../../assets/data';
import MovieTrendCard from '../movie-card/movieTrend';

interface MovieTrendListProps {
  trendingList: MovieDataType[];
}

const MovieTrendList = ({ trendingList }: MovieTrendListProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        overflowX: 'scroll',
        width: {
          sm: '100%',
          lg: '90%',
        },
      }}
    >
      {trendingList.map((movie) => (
        <Grid item key={movie.id} sx={{paddingBottom:'15px'}}>
          <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
            <MovieTrendCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default MovieTrendList;
