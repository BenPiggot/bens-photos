import React from 'react';
import { Dialog, Tooltip } from '@mui/material';

const Image = (props) => {
  if (props.isMagnified) {
    return (
      <Dialog onBackdropClick={() => props.handleImageMagnify(null)} open={props.isMagnified} fullWidth={true} maxWidth={'lg'} style={{ padding: '20px'}}>
        <img 
          style={{ height: 'auto', width: 'auto', 
          marginBottom: '0', zIndex: 1000
          }} 
          src={props.url} 
          onClick={() => props.handleImageMagnify(null)}
        />
      </Dialog>
    )
  }
  return (
    <Tooltip followCursor title="Click image to expand" style={{ cursor: 'pointer '}}>
      <img 
        style={{ 
            maxHeight: '200px', maxWidth: '200px', 
            height: 'auto', width: 'auto', padding: '10px', 
            display: 'inline-flex', cursor: "pointer"}} 
        src={props.url} 
        onClick={() => props.handleImageMagnify(props.idx )}
      />
    </Tooltip>
  )
};

export default Image;
