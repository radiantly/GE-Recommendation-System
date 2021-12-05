import { makeStyles } from '@material-ui/core/styles';

var BackgroundColor = "RED"

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    marginTop: '20%',
  },
  media: {
    height: 200,
    paddingTop: '56.25%', // 16:9
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