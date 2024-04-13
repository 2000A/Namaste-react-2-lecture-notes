/**
 * <div id="parent">
 *      <div id="child">
 *            <h1>I'm h1 tag</h1>
 *            <h2>I'm h1 tag</h2>
 *      </div>
 *      <div id="child2">
 *            <h1>I'm h1 tag</h1>
 *            <h2>I'm h1 tag</h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div", 
  { id: "parent" },
  React.createElement("div",{id:"child"},
  [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h1 tag")]
  ),
  React.createElement("div",{id:"child"},
  [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h1 tag")]
  ));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React"
// ); //{} empty object is used => to give attribute to tags
// console.log(heading); //react element i.e., an object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //through render method heading object is converted to h1 tag and attached inside root.


//JS code for Hello world:
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello world";
// const root = document.getElementById("root");
// root.appendChild(heading);
