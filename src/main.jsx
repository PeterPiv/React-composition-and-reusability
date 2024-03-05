import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-v2.jsx";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating}></StarRating>
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
