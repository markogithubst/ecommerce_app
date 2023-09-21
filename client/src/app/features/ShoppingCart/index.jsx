import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, Modal, Typography } from '@mui/material';
import productImages from '../../utils/productImages';
import { removeFromShoppingCart } from '../../api/shoppingCartApiSlice';
import { toastifyWarning } from '../../hooks/useToastify';

const ModalShoppingCart = ({ togglePropToRenderCartModal }) => {
  const [closeModal, setCloseModal] = useState(false);
  const [sumPrice, setSumPrice] = useState(0);
  const shoppingCartProductList = useSelector(state => state.shoppingCart.shoppingCartProductList);
  const dispatch = useDispatch();
  const modalBackgroundColor = '#e5ecf3';
  const cancelButtonBackgroundColor = '#e76a70';
  const buyButtonBackgroundColor = '#6c9372';
  const productNameAndDescriptionColor = '#4A4D59';

  useEffect(() => {
    setCloseModal(false);
  }, [togglePropToRenderCartModal]);

  const handleCloseModal = () => {
    setCloseModal(true);
  };

  const handleRemoveFromCart = (index) => {
    dispatch(removeFromShoppingCart({ id: index }));
    toastifyWarning('Removed from Shopping Cart');
  };

  useEffect(() => {
    if (shoppingCartProductList.length !== 0) {
      let totalPrice = 0;
      shoppingCartProductList.forEach(product => (totalPrice = totalPrice + product.price));
      setSumPrice(totalPrice);
    }
  }, [shoppingCartProductList]);

  return (
    <Modal open={!closeModal} onClose={handleCloseModal}>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: modalBackgroundColor,
          padding: '2rem',
          width: '60%',
          maxHeight: '90%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '25px'
        }}>
        <button
          onClick={handleCloseModal}
          style={{
            position: 'absolute',
            borderRadius: '40%',
            top: '5px',
            right: '5px',
            border: 'none',
            background: 'none',
            cursor: 'pointer'
          }}
        >
          <Typography variant="caption" sx={{ fontSize: 16, fontWeight: 'bold', color: '#4a4c59', pt: '3px' }}>
                  X
          </Typography>
        </button>
        <Grid container justifyContent={'center'} style={{ padding: '25px' }} >
          <Grid item justifyContent={'center'}>
            {shoppingCartProductList.length === 0 && <Typography
              variant="subtitle1"
              style={{
                color: productNameAndDescriptionColor,
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              Your shopping cart is empty
            </Typography>}
            {shoppingCartProductList.length > 0 && <Grid>
              <Typography
                variant="subtitle1"
                style={{
                  color: productNameAndDescriptionColor,
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  paddingBottom: '30px'
                }}
              >Products in the shopping cart: </Typography>
              <div style={{ overflowY: 'auto', maxHeight: '400px', padding: '10px' }}>
                {shoppingCartProductList.map((product, index) => (
                  <Grid container
                    key={index}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    padding={4}
                    sx={{ backgroundColor: index % 2 !== 0 ? '#DDC9B5' : 'none', borderRadius: '50px' }}
                  >
                    <Grid item xs={2}
                      justifyContent="center"
                      alignItems="center">
                      <img
                        src={productImages[product.name] || ''}
                        alt={product.name}
                        width="90%"
                        style={{ borderRadius: '40px' }}
                      />
                    </Grid>
                    <Grid item xs={7}
                      justifyContent="center"
                      alignItems="center">
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
                    </Grid>
                    <Grid item xs={2}
                      justifyContent="center"
                      alignItems="center">
                      <Typography
                        variant="subtitle2"
                        style={{
                          color: 'black',
                          textDecoration: 'none'
                        }}
                      >
                        {product.price}$
                      </Typography>
                    </Grid>
                    <Grid item xs={1}
                      justifyContent="center"
                      alignItems="center">
                      <Button
                        variant="outlined"
                        onClick={(() => { handleRemoveFromCart(index); })}
                        sx={{
                          borderRadius: '20px',
                          '&:hover': {
                            backgroundColor: '#e8f1f9',
                            boxShadow: 'none'
                          }
                        }}>X</Button>
                    </Grid>
                  </Grid>
                ))}
              </div>
            </Grid>}
          </Grid>
        </Grid>
        {shoppingCartProductList.length !== 0 &&
          <Grid item
            xs={12}
            textAlign={'right'}>
            <Typography variant="subtitle2"
              style={{
                color: productNameAndDescriptionColor,
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>
              Total price:
              <Typography
                variant="subtitle2"
                style={{
                  color: 'black',
                  textDecoration: 'none'
                }}
              >{sumPrice}$
              </Typography>
            </Typography>
          </Grid>}
        <Grid container justifyContent={'center'} textAlign={'center'}>
          <Grid item>
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
              }}>Buy</Button>
          </Grid>
          <Grid item>
            <Button
              onClick={(handleCloseModal)}
              sx={{
                backgroundColor: cancelButtonBackgroundColor,
                color: 'black',
                m: 1,
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: '#e8f1f9',
                  boxShadow: 'none'
                }
              }}>Cancel</Button>
          </Grid>
        </Grid>
      </div>
    </Modal>
  );
};

export default ModalShoppingCart;
