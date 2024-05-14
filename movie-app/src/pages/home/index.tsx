import React, { useState, SetStateAction, useContext } from 'react';
import Layout from '../../Layout';
import {
  Box,
  InputAdornment,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import SearchIcon from '../../assets/icons/icon-search.svg';
import MovieTrendList from '../../components/movie-list/movieTrendList';
import MovieList from '../../components/movie-list';
import { MovieDataType } from '../../assets/data';
import { MovieContext } from '../../context/movie-context';

const Home = () => {
  const [search, setSearch] = useState('');
  const [seacrhList, setSearchList] = useState<MovieDataType[]>([]);
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const trendingList = movies.filter((item) => item.isTrending === true);
  const recommendedList = movies.filter((item) => item.isTrending !== true);

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
      <Box py={2} sx={{
        px: {
          xs: 1,
          lg: 4
        }
      }}>
        {search === '' ? (
          <Box width='100%'>
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
                Trending
              </Typography>
              <MovieTrendList trendingList={trendingList} />
            </Box>
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
                Recommended for You
              </Typography>
              <MovieList recommendedList={recommendedList} />
            </Box>
          </Box>
        ) : (
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
              Found {seacrhList.length} result
            </Typography>
            <MovieList recommendedList={seacrhList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
