import React, { useState, SetStateAction, useContext } from 'react';
import Layout from '../../Layout';
import {
  Box,
  Paper,
  InputBase,
  InputAdornment,
  Typography,
} from '@mui/material';
import SearchIcon from '../../assets/icons/icon-search.svg';
import MovieList from '../../components/movie-list';
import { MovieDataType } from '../../assets/data';
import { MovieContext } from '../../context/movie-context';

const Movie = () => {
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;
  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };
  return (
    <Layout>
      <Box px={4}>
        <Paper
          component='form'
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: 'default',
            padding: 1,
            backgroundColor: '#40f0e5',
            border: 'none',
            width: {
              xs: '100%',
              lg: '280px',
            },
          }}
        >
          <InputBase
            placeholder='Search for movies or TV series'
            sx={{
              ml: 1,
              flex: 1,
              color: 'black',
              border: 'none',
            }}
            value={search}
            onChange={handleSearch}
            endAdornment={
              <InputAdornment position='end'>
                <img
                  src={SearchIcon}
                  alt='search-icon'
                  width={20}
                  height={20}
                  style={{ marginRight: '10px', cursor: 'pointer' }}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === '' ? (
          <Box width='100%'>
            <Typography
              variant='h5'
              component='h1'
              my={6}
              fontWeight={600}
              color='white'
              letterSpacing={'1px'}
              fontSize='23px'
            >
              Movies
            </Typography>
            <MovieList recommendedList={search === '' ? movies : searchList} />
          </Box>
        ) : (
          <Box width='100%'>
            <Typography>
              Found {searchList.length} results for "{search}"{''}
            </Typography>
            <MovieList recommendedList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Movie;
