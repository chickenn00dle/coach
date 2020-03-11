import {createMuiTheme} from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/createPalette';
import primaryColor from './PrimaryColor';
import secondaryColor from './SecondaryColor';

const theme = createMuiTheme({
  palette: createPalette({
    primary: primaryColor,
    secondary: secondaryColor,
    accent: secondaryColor,
  }),
  typography: {
    useNextVariants: true,
  },
});

export default theme;
