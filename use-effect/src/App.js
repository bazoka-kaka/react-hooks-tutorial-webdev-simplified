import { useState, useEffect } from "react";

const App = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  return (
    <div>
      <button onClick={() => setResourceType("posts")}>posts</button>
      <button onClick={() => setResourceType("users")}>users</button>
      <button onClick={() => setResourceType("comments")}>comments</button>
      <h1>{resourceType}</h1>
      {items.map((item, i) => {
        return <pre key={i}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
};

export default App;

// windows with event listener
// import { useState, useEffect } from "react";

// const App = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleResize = () => {
//     setWindowWidth(window.innerWidth);
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>{windowWidth}</h1>
//     </div>
//   );
// };

// export default App;

//fetching data
// import { useState, useEffect } from "react";

// const App = () => {
//   const [resourceType, setResourceType] = useState("posts");
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => setItems(json));
//   }, [resourceType]);

//   return (
//     <div>
//       <button onClick={() => setResourceType("posts")}>posts</button>
//       <button onClick={() => setResourceType("users")}>users</button>
//       <button onClick={() => setResourceType("comments")}>comments</button>
//       <h1>{resourceType}</h1>
//       {items.map((item) => {
//         return <pre>{JSON.stringify(item)}</pre>;
//       })}
//     </div>
//   );
// };

// export default App;
