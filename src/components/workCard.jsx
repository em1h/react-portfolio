import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width:'70%',
    margin: 5,
    overflow:'auto',
    backgroundColor:'whitesmoke',
  },
  title: {
    fontSize: 14,
  },
  titleText: {
    fontSize: 18,
    color: '#f57c00'
  }
});

export default function WorkCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom color="textSecondary">
          {props.duration}
        </Typography>
        <Typography className={classes.titleText} variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography variant="body" component="p">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}