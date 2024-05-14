import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/sidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        backgroundColor: '#171717',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          lg: 'row',
        },
        color: 'black',
        padding: 3,
        gap: 3,
        overflowY: 'hidden',
        overflowX: 'hidden',
        height: {
          xs: '100%',
          lg: '130vh',
        },
      }}
    >
      <Sidebar />
      <Box
        sx={{
          width: '100%',
          //   overflowY: 'scroll'
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
