# Lecture Notes  

## The first step is to import React into your application 
<p> importing React and ReactDOM through CDN links. React is core part whereas ReactDOM will help React to work with browser i.e., DOM manipulation.</p>

CDN: content delivery network 
CDN is network of distributed servers where copies of react scripts/ contents are stored  so if any request to fetch any content is placed the request will be recieved by the nearest server in the network.

## Importing of React is done now lets use it.
1️⃣ creating an element using React.createElement()  
React.createElement(html element/tag name, {}<--Attributes in object format, children)  
**children : content of say h1,p tags  
2️⃣ ReactDOM.createRoot(document.getElementById("root")) :  
second step is selecting root using ReactDOM.createRoot() why so? ReactDOM for manipulation of DOM as Alone React cannot do it alone.  
ReactDOM.createRoot(document.getElementById("root")) requires an element (incomplete note)  

3️⃣ root.render(heading) will render the React element that is an object 
the object is converted to html element/tag and put inside of div that has id='root'

``` JavaScript
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
```

above code creates an react object which first gets converted to html element then that html element gets added to the place where we will render it i.e., <div id="root">{all code will be rendered here only}</div>  


# …or push an existing repository from the command line
## git remote add origin git@github.com:2000A/Namaste-react-2-lecture-notes.git
## git branch -M main
## git push -u origin main

https://git@github.com:2000A/Namaste-react-2-lecture-notes.git


```JavaScript
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); 

```
using ReactDOM react will create virtual dom inside that virtual dom we will give element to createRoot (a root element will made).render(heading) will take the heading and paste it into that virtual dom 