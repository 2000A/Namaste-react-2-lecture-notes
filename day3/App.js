import React from "react";
import ReactDOM from "react-dom/client"

//create React Element using core React
//React.createElement ==> ReactElement - JS object ==> HTMLElement(render)
const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Laying The foundation lession 3 ╰(*°▽°*)╯"
);
// console.log(heading);

// //create ReactElement using JSX
// //does JS engine understands JSX (no right) it might getting converted before its given to JS engine
// //who is doing it?????

// //JSX(transpiled before it reaches the JS) - PARCEl - babel 
// //babel is doing the transpilation as its a JS compiler and also called as transpiler
// //code is transpiled so browser JS engine can understand.

// //JSX => Babel transpiles JSX to React.createElement => ReactElement -JS object => HTMLElement(render)

// //babel transpiles JSX To React.createElement as React can understand
// const jsxHeading = <h1 id="heading">Namaste React 🧑‍🚀🚀</h1>

// console.log(jsxHeading);

// 2. React Functional Component 

// const HeadingComponent = () => {
//     return <h1>Functional Component is normal JS function that return JSX or ReactElement</h1>
// }

const Title = () => (
    <div>
        <h1>This is Title Component</h1>
        <h2>We'll see how to compose component i.e, rendering a component inside another component</h2>
    </div>
)

const data = 10000;
//component composition
const Headingcomponent2 = () =>(
    <div id="container">
     <h2>{data}</h2>
     {100+300}
     {console.log("oiweksjldkjsljo")}
     {heading}
     <h1 className="heading">In arrow functions if return one line we can skip return</h1>
     <Title />
     <Title></Title>
     {Title()}
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading); //rendering JSX element like this 
root.render(<Headingcomponent2 />); //rendering component 
// root.render(Headingcomponent2());//as its JS function only 