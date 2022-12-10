
```
 const [state, setState] = useState([]);
  fetch("/api/products", {
    method: "get",
    headers: {
      "content-type": "application/json"
    },
  })
    .then((res) => res.json())
    .then(json => setState(json));

```