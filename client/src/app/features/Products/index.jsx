import { Box, CircularProgress, Grid, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useGetProductsListQuery } from '../../api/productsApiSlice';
import { toastifyError } from '../../hooks/useToastify';
import productImages from '../../utils/productImages';
import ModalShoppingCart from '../ShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsListQuery();
  const [productsList, setProductsList] = useState([]);
  const [categoryName, setCategoryName] = useState([]);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [togglePropToRenderCartModal, setTogglePropToRenderCartModal] = useState(false);
  const allProductBackgroundColor = '#f1f5f9';
  const productBorderColor = '#7fa2c4';
  const oneProductBackgroundColor = '#dae4ee';
  const buyButtonBackgroundColor = '#92af97';
  const categoriesNameAndDescriptionColor = '#4A4D59';
  const backButtonBackgroundColor = '#f1dfcd';
  const cartButtonBackgroundColor = '#afc4b2';
  const productNameAndDescriptionColor = '#4A4D59';

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

  const handleCartModal = () => {
    setCartModalOpen(true);
    setTogglePropToRenderCartModal((prevValue) => !prevValue);
  };

  return (
    <Box sx={{ mt: 5 }}>
      <div
        style={{
          backgroundColor: allProductBackgroundColor,
          padding: '1rem',
          width: '100%',
          borderRadius: '30px'
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
              <Grid container>
                <Grid item xs={10}>
                  <Typography
                    variant="h4"
                    pb={2}
                    style={{ color: categoriesNameAndDescriptionColor, textDecoration: 'none' }}>
                    {categoryName}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    onClick={handleCartModal}
                    sx={{
                      backgroundColor: cartButtonBackgroundColor,
                      color: 'black',
                      m: 1,
                      borderRadius: '20px',
                      '&:hover': {
                        backgroundColor: '#e8f1f9',
                        boxShadow: 'none'
                      }
                    }}><ShoppingCartIcon /></Button>
                </Grid>
                <Grid item xs={1}>
                  <RouterLink
                    to={'/home'}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button
                      sx={{
                        backgroundColor: backButtonBackgroundColor,
                        color: 'black',
                        m: 1,
                        borderRadius: '20px',
                        '&:hover': {
                          backgroundColor: '#e8f1f9',
                          boxShadow: 'none'
                        }
                      }}><ArrowBackIcon /></Button>
                  </RouterLink>
                </Grid>
              </Grid>
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
                            borderRadius="20px"
                            backgroundColor={oneProductBackgroundColor}
                            style={{ cursor: 'pointer' }}
                          >
                            <Typography
                              variant="subtitle1"
                              style={{
                                color: productNameAndDescriptionColor,
                                textDecoration: 'none',
                                fontWeight: 'bold'
                              }}
                            >
                              {product.name}
                            </Typography>
                            <img
                              src={productImages[product.name] || ''}
                              alt={product.name}
                              width="100%"
                              style={{ borderRadius: '20px' }}
                            />
                            <Typography
                              variant="subtitle2"
                              style={{
                                color: productNameAndDescriptionColor,
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
                                borderRadius: '20px',
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
                  <Typography variant="h5" color={'black'}>
                    No products found in the database
                  </Typography>
                </div>
              )}
            </Grid>
          </Grid>
        </Box>
        {isCartModalOpen &&
      <ModalShoppingCart
        isOpen={isCartModalOpen}
        onClose={() => setCartModalOpen(false)}
        togglePropToRenderCartModal={togglePropToRenderCartModal}
      />}
      </div>
    </Box>
  );
};

export default Products;
