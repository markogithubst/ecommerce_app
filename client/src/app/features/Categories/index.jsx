import { useEffect, useState } from 'react';
import { CircularProgress, Grid, Typography, Box } from '@mui/material';
import { useGetCategoriesListQuery } from '../../api/categoriesApiSlice';
import { toastifyError } from '../../hooks/useToastify';
import camerasImage from '../../images/cameras-category.jpg';
import headphoneEarphoneImage from '../../images/headphone-earphone-category.jpg';
import laptopsImage from '../../images/laptops-category.jpg';
import mobilePhoneImage from '../../images/mobile-phone-category.jpg';
import smartwatchImage from '../../images/smartwatch-category.jpg';
import speakerImage from '../../images/speaker-category.jpg';
import { Link as RouterLink } from 'react-router-dom';

const Categories = () => {
  const { data: categories, error, isLoading } = useGetCategoriesListQuery();
  const [categoriesList, setCategoriesList] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const allCategoriesBackgroundColor = '#f1f5f9';
  const hoveredBackgroundColor = '#b5c9dd';
  const categoriesNameAndDescriptionColor = '#4A4D59';
  const oneCategoryBackgroundColor = '#dae4ee';
  const categoryBorderColor = '#7fa2c4';

  useEffect(() => {
    if (error) {
      toastifyError(error);
    }

    categories && setCategoriesList(categories.data.modelRows);
  }, [error, categories]);

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const rowsOfThree = chunkArray(categoriesList, 3);

  const categoryImages = {
    Cameras: camerasImage,
    'Headphones and Earphones': headphoneEarphoneImage,
    Laptops: laptopsImage,
    'Mobile Phones': mobilePhoneImage,
    Smartwatches: smartwatchImage,
    Speakers: speakerImage
  };

  const handleMouseEnter = (categoryName) => {
    setHoveredCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const createCategoryLink = (categoryName) => {
    const categoryLink = {
      Cameras: 'cameras',
      'Headphones and Earphones': 'headphones-and-earphones',
      Laptops: 'laptops',
      'Mobile Phones': 'mobile-phones',
      Smartwatches: 'smartwatches',
      Speakers: 'speakers'
    };

    const categoryLinkForRoute = categoryLink[categoryName];

    return `/products/${categoryLinkForRoute}`;
  };

  return (
    <div
      style={{
        backgroundColor: allCategoriesBackgroundColor,
        padding: '1rem',
        width: '100%',
        borderRadius: '8px'
      }}
    >
      {isLoading && <CircularProgress />}
      <Box sx={{ display: 'flex', p: 1 }}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          pt={1}
        >
          <Grid item xs={12}>
            {rowsOfThree.length > 0 && (
              <div>
                {rowsOfThree.map((row, rowIndex) => (
                  <Grid container key={rowIndex}>
                    {row.map((category, index) => (
                      <Grid item xs={4} key={index}>
                        <RouterLink
                          to={createCategoryLink(category.name)} // Pass category name as a param
                          style={{ textDecoration: 'none' }}
                        >
                          <Box
                            border={0.5}
                            borderColor={categoryBorderColor}
                            padding="0.5rem"
                            m={1}
                            borderRadius="2%"
                            backgroundColor={
                              hoveredCategory === category.name
                                ? hoveredBackgroundColor
                                : oneCategoryBackgroundColor
                            }
                            boxShadow={
                              hoveredCategory === category.name ? 5 : 0
                            }
                            onMouseEnter={() =>
                              handleMouseEnter(category.name)
                            }
                            onMouseLeave={handleMouseLeave}
                            style={{ cursor: 'pointer' }}
                          >
                            <Typography
                              variant="subtitle1"
                              style={{
                                color: categoriesNameAndDescriptionColor,
                                textDecoration: 'none',
                                fontWeight: 'bold'
                              }}
                            >
                              {category.name}
                            </Typography>
                            <img
                              src={categoryImages[category.name] || ''}
                              alt={category.name}
                              width="100%"
                              style={{ borderRadius: '8px' }}
                            />
                            <Typography
                              variant="subtitle2"
                              style={{
                                color: categoriesNameAndDescriptionColor,
                                textDecoration: 'none'
                              }}
                            >
                              {category.description}
                            </Typography>
                          </Box>
                        </RouterLink>
                      </Grid>
                    ))}
                  </Grid>
                ))}
              </div>
            )}
            {!isLoading && rowsOfThree.length === 0 && (
              <div>
                <Typography variant="h5" color={'red'}>
                  No categories/products found in the database, please check connection with database
                </Typography>
              </div>
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Categories;
