import { useEffect, useState } from 'react';
import { Button, Grid, Modal, Typography } from '@mui/material';

const ModalShoppingCart = ({ togglePropToRenderCartModal }) => {
  const [closeModal, setCloseModal] = useState(false);
  const modalBackgroundColor = '#e5ecf3';
  const updateButtonBackgroundColor = '#e76a70';
  const buyButtonBackgroundColor = '#6c9372';

  useEffect(() => {
    setCloseModal(false);
  }, [togglePropToRenderCartModal]);

  const handleCloseModal = () => {
    setCloseModal(true);
  };

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
          width: '50%',
          maxHeight: '95%',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '25px'
        }}>
        <button
          onClick={handleCloseModal}
          style={{
            position: 'absolute',
            borderRadius: '40%',
            top: '0',
            right: '0',
            border: 'none',
            background: 'none',
            cursor: 'pointer'
          }}
        >
          <Typography variant="caption" sx={{ fontSize: 16, fontWeight: 'bold', color: '#4a4c59', pt: '3px' }}>
                  X
          </Typography>
        </button>
        <Grid container justifyContent={'center'}>
          <Grid item>
            <Typography sx={{ p: 2 }}>Order details: </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={'center'}>
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
                backgroundColor: updateButtonBackgroundColor,
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