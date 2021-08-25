import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginTop: "20px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function BlogCard({id, author, content, date }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {id}
          </Avatar>
        }
        author="Admin"
        subheader={new Date(date).toDateString()}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
         {author}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <div dangerouslySetInnerHTML={{ __html: content }}></div> 
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="/">
            <Button size="small" color="primary">
                Go Back
            </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
