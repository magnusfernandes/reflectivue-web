import SearchIcon from '@mui/icons-material/Search';
import { InputBase, alpha, styled } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.35),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.35),
  },
  border: `1px solid ${theme.palette.grey[300]}`,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    fontSize: '14px',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput = (props: SearchInputProps) => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon style={{ color: '#838a9c' }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={props.placeholder ? props.placeholder : 'Search…'}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};
