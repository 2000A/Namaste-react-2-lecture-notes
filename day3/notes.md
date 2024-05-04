
# Cross site scripting attack
## JSX takes care of these injection attacks 
JSX escape these attacks , JSX sanitise the data before executing the code such a powerfull 
```JS

const data = api.getData();

const Heading = () => {
    <div>
        {data}  
    </div>
}

```

<p>suppose is api send malicious data and if that malicious code runs on browser then you as user data is at risk</p>

#Assignment-3
Q. What is JSX?
A. JSX is a syntax easy and readable way to write react element. JSX syntax like HTML and XML, using JSX we can write HTML and JS together.

Q.  Superpowers of JSX
A. 1. it stops injection attacks 
   2.
Q.  Role of type attribute in script tag? What options can I use there?
A.The type attribute specifies the type of the script.

The type attribute identifies the content between the <script> and </script> tags.


const nestedHeader1 = React.createElement(
    "div",
    {class="title"},
    [
        React.createElement("h1",{},"I am h1 tag"),
        React.createElement("h2",{},"I am h2 tag"),
        React.createElement("h3",{},"I am h3 tag")
    ]
)

const nestedHeader2 = (
    <div className = "title">
    <h1>"i am h1 tag"</h1>
    <h2>"i am h1 tag"</h2>
    <h3>"i am h1 tag"</h3>
    </div>
)

const NestedHeader3 = () => {
    <div className = "title">
    {nestedHeader2}
    <h1>"i am h1 tag"</h1>
    <h2>"i am h1 tag"</h2>
    <h3>"i am h1 tag"</h3>
    </div>
}