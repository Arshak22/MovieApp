import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Box, Hidden, Typography } from '@mui/material';
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import movieIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import bookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg";

const navLinks = [
  {
    name: 'Home',
    icon: homeIcon,
    link: '/',
  },
  {
    name: 'Movies',
    icon: movieIcon,
    link: '/movies',
  },
  {
    name: 'TV Series',
    icon: tvSeriesIcon,
    link: '/tv-series',
  },
  {
    name: 'Bookmarks',
    icon: bookmarkIcon,
    link: '/bookmarks',
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <Box
      sx={{
        backgroundColor: '#40f0e5',
        padding: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: {
          xs: 'row',
          lg: 'column',
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        width: {
          sm: '100%',
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: {
            xs: 'row',
            lg: 'column',
          },
          gap: 5,
          alignItems: {
            xs: 'center',
            ls: 'start',
          },
          width: '100%',
        }}
      >
        <Hidden smDown>
          <Typography
            variant='h5'
            component='h1'
            my={2}
            fontWeight={600}
            fontSize={20}
          >
            Movie App
          </Typography>
        </Hidden>
        <Box
          sx={{
            py: {
              xs: '0px',
              ls: '16px',
            },
            display: 'flex',
            flexDirection: {
              xs: 'row',
              lg: 'column',
            },
            justifyContent: {
              sm: 'center'
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: 'none' }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  color: 'black',
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: "18px",
                    filter: `${
                      pathname === item.link
                        ? "invert(57%) sepia(45%) saturate(3166%) hue-rotate(180deg) brightness(100%) contrast(100%)"
                        : "invert(0%)"
                    }`,
                  }}
                />
                <Hidden mdDown>
                  <Typography>{item.name}</Typography>
                </Hidden>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
