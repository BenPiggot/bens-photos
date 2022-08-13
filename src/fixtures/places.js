import React from 'react';
import { MenuItem } from '@mui/material';

export const places =  {
  'france': [            
    <MenuItem value={'paris'}>Paris</MenuItem>,
    <MenuItem value={'chartes'}>Chartres</MenuItem>,
    <MenuItem value={'nantes'}>Nantes</MenuItem>,
    <MenuItem value={'bordeaux'}>Bordeaux</MenuItem>,
    <MenuItem value={'carcassone'}>Carcassone</MenuItem>,
    <MenuItem value={'canal_du_midi'}>Canal du Midi</MenuItem>,
    <MenuItem value={'marseille'}>Marseille</MenuItem>,
    <MenuItem value={'nimes'}>Nimes</MenuItem>,
    <MenuItem value={'nice'}>Nice</MenuItem>,
    <MenuItem value={'cote_d_azur'}>Cote d'Azur</MenuItem>,
    <MenuItem value={'monaco'}>Monaco</MenuItem>,
    <MenuItem value={'lyon'}>Lyon</MenuItem>
  ],
  'sweden': [
    <MenuItem value={'stockholm'}>Stockholm</MenuItem>,
    <MenuItem value={'darlana'}>Darlana Region</MenuItem>,
    <MenuItem value={'uppsala_sig_tuna'}>Uppsala & Sig Tuna</MenuItem>
  ],
  'norway': [
    <MenuItem value={'bergen'}>Bergen</MenuItem>,
    <MenuItem value={'fjords'}>The Fjords</MenuItem>,
    <MenuItem value={'oslo'}>Oslo</MenuItem>
  ],
  'finland': [
    <MenuItem value={'ferry'}>Baltic Sea</MenuItem>,
    <MenuItem value={'helsinki'}>Helsinki</MenuItem>,
  ]
}