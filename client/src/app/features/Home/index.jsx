import { Box, Grid, Typography } from '@mui/material';
import Categories from '../Categories';

const HomePage = () => {
  const categoriesNameAndDescriptionColor = '#4A4D59';

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
            <Typography
              variant="h4"
              pb={2}
              style={{ color: categoriesNameAndDescriptionColor, textDecoration: 'none' }}>
              SHOPPING CATEGORIES
            </Typography>
            < Categories />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomePage;
