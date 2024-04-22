
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