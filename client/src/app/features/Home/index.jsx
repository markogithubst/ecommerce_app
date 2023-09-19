import { Box, Grid } from '@mui/material';
import Categories from '../Categories';

const HomePage = () => {
  return (
    <div>
      <Box sx={{ display: 'flex', p: 3 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            < Categories />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
