import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
}));

const limitText = (text, limit = 300) => {
  const newtext = [];
  if(text.length > limit){
      text.split(' ').reduce((acc, cur) => {
         if((acc + cur.length) <= limit){
           newtext.push(cur);  
         }
         return acc + cur.length;
      }, 0)

      return `${newtext.join(' ')}...`
  }

  return text;
}

export default function MediaCard({ id, author, content }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            <div dangerouslySetInnerHTML={{ __html: limitText(content) }}></div> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href="/blogs/[id]" as={`/blogs/${id}`}>
          <Button size="small" color="primary">
            Show More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}