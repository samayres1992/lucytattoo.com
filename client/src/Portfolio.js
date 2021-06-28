import useSWR from 'swr';
import Slider from "react-slick";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

const fetcher = url => fetch(url).then(r => r.json());

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

function Portfolio() {
  return "hi"
}

export default Portfolio;
