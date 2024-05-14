import React from 'react';
import Layout from '../../Layout';
import { Box, Typography } from '@mui/material';

const Error = () => {
  return (
    <Layout>
      <Box
        py={2}
        sx={{
          px: {
            xs: 1,
            lg: 4,
          },
        }}
      >
        <Box width='100%'>
          <Typography
            variant='h5'
            component='h1'
            my={6}
            fontWeight={600}
            color='white'
            letterSpacing={'1px'}
            fontSize='40px'
          >
            Page Not Found
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Error;
