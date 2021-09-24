import React from 'react';
import Link from 'next/link';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
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

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ReactPannellum, { getConfig } from "react-pannellum";

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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
/*   nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow /> */
};

export default function BlogCard({id, title, blogText, date, images }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function imagesComponent(){
    return (images.map(el => el.image360 ? (
      <div key={id}>
        <ReactPannellum
          id={`${id}`}
          sceneId={`${id}`}
          imageSource={`https://storage.googleapis.com/secretimmo-static-bucket/${el?.imageName}`}
          config={config}
          style={{
            width: "100%",
            height: "350px",
            display: "block"
          }}
        />
      </div>
      ):(
        <div key={id}>
          <img
            src={`https://storage.googleapis.com/secretimmo-static-bucket/${el?.imageName}`}
            alt="Blog Cover"
            className="object-fill h-full w-auto rounded-lg rounded-b-none md:h-56"
          />
        </div> 
      ))
    )
  }

  const config = {
    autoRotate: -8,
    autoLoad: true,
    author: "React Team"
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
        <div style={{ margin: '20px' }}>
          <Slider {...settings}>
            {
              imagesComponent()
            }
          </Slider>
        </div>
        <Typography gutterBottom variant="h5" component="h2">
         {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="div">
          {blogText}
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
