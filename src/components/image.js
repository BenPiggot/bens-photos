import React from 'react';
import { Dialog, Tooltip } from '@mui/material';

const Image = (props) => {
  if (props.isMagnified) {
    return (
      <Dialog onBackdropClick={() => props.handleImageMagnify(null)} BackdropProps={{style: {backgroundColor: 'rgba(0,0,0,0.85)'}}} open={props.isMagnified} maxWidth={'md'} sx={{ padding: '20px'}}>
        <img 
          style={{ height: 'auto', width: 'auto', 
          marginBottom: '0', zIndex: 1000, maxHeight: '85vh'
          }} 
          src={props.url} 
          onClick={() => props.handleImageMagnify(null)}
        />
      </Dialog>
    )
  }
  return (
    <Tooltip followCursor title="Click image to expand">
      <img 
        style={{ 
            maxHeight: '200px', maxWidth: '200px', 
            height: 'auto', width: 'auto', padding: '10px', 
            display: 'inline-flex'}} 
        src={props.url} 
        onClick={() => props.handleImageMagnify(props.idx )}
      />
    </Tooltip>
  )
};

export default Image;
