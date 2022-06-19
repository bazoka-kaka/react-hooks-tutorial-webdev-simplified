// previous name
import { useState, useEffect, useRef } from "react";

const App = () => {
  const [name, setName] = useState("");
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <div>
        My name is {name} and my previous name is {prevName.current}
      </div>
    </div>
  );
};

export default App;

// html reference
// import { useRef, useState, useEffect } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const inputRef = useRef();

//   const focus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         onChange={(e) => setName(e.target.value)}
//         value={name}
//       />
//       <div>My name is {name}</div>
//       <button onClick={focus}>Focus</button>
//     </div>
//   );
// };

// export default App;

// render count
// import { useEffect, useRef, useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const renderCount = useRef(1);

//   useEffect(() => {
//     renderCount.current = renderCount.current + 1;
//   });
//   return (
//     <div>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <div>My name is {name}</div>
//       <div>I rendered {renderCount.current} times</div>
//     </div>
//   );
// };

// export default App;
