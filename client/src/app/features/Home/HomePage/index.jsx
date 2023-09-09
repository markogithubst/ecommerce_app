import { Box, Grid } from '@mui/material';

const HomePage = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', p: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <div>Test</div>
          </Grid>
          <Grid item xs={6}>
            <div>Test 2</div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
