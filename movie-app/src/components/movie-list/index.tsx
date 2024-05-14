import React from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { MovieDataType } from '../../assets/data';
import MovieCard from '../movie-card';

interface MovieListProps {
  recommendedList: MovieDataType[];
}

const MovieList = ({ recommendedList }: MovieListProps) => {
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
      {recommendedList.map((movie) => (
        <Grid item key={movie.id}>
          <Paper elevation={0} sx={{ backgroundColor: 'transparent' }}>
            <MovieCard movie={movie} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default MovieList;
