import { Box, CircularProgress, Grid, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useGetProductsListQuery } from '../../api/productsApiSlice';
import { toastifyError } from '../../hooks/useToastify';
import action4KImage from '../../images/ActionX-4K.jpg';
import compactViewImage from '../../images/CompactView-V20.jpg';
import mirrorMaxImage from '../../images/MirrorMax-Z7.jpg';
import proCaptureImage from '../../images/ProCapture-2000.jpg';

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsListQuery();
  const [productsList, setProductsList] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const allProductBackgroundColor = '#f1f5f9';
  const productBorderColor = '#7fa2c4';
  const oneProductBackgroundColor = '#dae4ee';
  const buyButtonBackgroundColor = '#6c9372';

  const createProductCategory = () => {
    const productRouteName = window.location.pathname;
    const categoryLink = {
      '/products/cameras': 'Cameras',
      '/products/headphones-and-earphones': 'Headphones and Earphones',
      '/products/laptops': 'Laptops',
      '/products/mobile-phones': 'Mobile Phones',
      '/products/smartwatches': 'Smartwatches',
      '/products/speakers': 'Speakers'
    };

    const categoryLinkForRoute = categoryLink[productRouteName];
    return categoryLinkForRoute;
  };

  useEffect(() => {
    if (error) {
      toastifyError(error);
    }
    products && setProductsList(products.data.modelRows);
    setCategoryName(createProductCategory());
  }, [error, products]);

  const filteredProducts = productsList.filter(product => product.Category.name === categoryName);

  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const rowsOfThree = chunkArray(filteredProducts, 3);

  const cameraImages = {
    'ActionX 4K': action4KImage,
    'CompactView V20': compactViewImage,
    'MirrorMax Z7': mirrorMaxImage,
    'ProCapture 2000': proCaptureImage
  };

  return (
    <Box sx={{ mt: 5 }}>
      <div
        style={{
          backgroundColor: allProductBackgroundColor,
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
                      {row.map((product, index) => (
                        <Grid item xs={4} key={index}>
                          <Box
                            border={0.5}
                            borderColor={productBorderColor}
                            padding="0.5rem"
                            m={1}
                            borderRadius="2%"
                            backgroundColor={oneProductBackgroundColor}
                            style={{ cursor: 'pointer' }}
                          >
                            <Typography
                              variant="subtitle1"
                              style={{
                                color: 'black',
                                textDecoration: 'none',
                                fontWeight: 'bold'
                              }}
                            >
                              {product.name}
                            </Typography>
                            <img
                              src={cameraImages[product.name] || ''}
                              alt={product.name}
                              width="100%"
                              style={{ borderRadius: '8px' }}
                            />
                            <Typography
                              variant="subtitle1"
                              style={{
                                color: '#4A4D59',
                                textDecoration: 'none'
                              }}>
                              {product.description}
                            </Typography>
                            <Grid container justifyContent={'center'}>
                              <Grid item p={1}>
                                <Typography
                                  variant="subtitle2"
                                  style={{
                                    color: 'black',
                                    textDecoration: 'none'
                                  }}
                                >
                              Stock: {product.stock}
                                </Typography>
                              </Grid>
                              <Grid item p={1}>
                                <Typography
                                  variant="subtitle2"
                                  style={{
                                    color: 'black',
                                    textDecoration: 'none'
                                  }}
                                >
                              Price: {product.price}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Button
                              sx={{
                                backgroundColor: buyButtonBackgroundColor,
                                color: 'black',
                                m: 1,
                                '&:hover': {
                                  backgroundColor: '#e8f1f9',
                                  boxShadow: 'none'
                                }
                              }}>Add to cart</Button>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  ))}
                </div>
              )}
              {(!isLoading && productsList.length === 0) && (
                <div>
                  <Typography variant="h5" color={'red'}>
                    No products found in the database
                  </Typography>
                </div>
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </Box>
  );
};

export default Products;
