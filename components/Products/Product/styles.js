import { makeStyles } from '@material-ui/core/styles';
var Bootstrap = require('react-bootstrap')



export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    marginTop: '20%',
    boxShadow: "10px 30px 10px #000000",
  },

  media: {
    height: 200,
    paddingTop: '56.25%',
    boxShadow: "10px 30px 10px #000000", // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    // display: 'flex',
    justifyContent: 'space-between',
  },
}));