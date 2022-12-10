
fetch("/api/login",{
    
      method: "POST",
      headers: {
        "Content-Type":"application/json; charset=utf-8"

      },
      body: JSON.stringify({
        "id" : userid,
        "pw" : userpassword,
      })

    })
      .then((res) => res.json())
      .then(data => {
        console.log(data)
      });