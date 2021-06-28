import { useReducer } from "react";
import { cartReducer } from "./Reducers/Cart";
import useSWR from 'swr';
import Slider from "react-slick";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { ADD_TO_CART } from './Reducers/Types';
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

function App() {
  const [state, dispatch] = useReducer(cartReducer, {cart: []});
  const { data, error } = useSWR('http://localhost:1337/items', fetcher);
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div className="grid grid-cols-2 gap-20">
      {data.map((item) => {
        return (
          <div key={item.id} className="col-span-1">
            <h1>{item.title}</h1>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
              {item.description}
            </ReactMarkdown>
            <Slider {...settings}>
              {item.images.map(image => <img key={image.id} src={"http://localhost:1337" + image.url} alt={image.alt} />)}
            </Slider>
            <button 
              className="bg-blue-500 px-4 py-2 text-lg font-semibold tracking-wider text-white rounded hover:bg-blue-600"
              onClick={() =>  dispatch({ type: ADD_TO_CART, payload: item })}
            >Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
