import { useState } from "react";

export const Posttest = () => {
    const [state, setState] = useState(
        {
            text: "안녕하세요",
        }
    );
    const handlChange = (e) => {
        setState({
          [e.target.name]: e.target.value,
        });
      };
    const onclick = () => {
        const textbox = {
          intext: state.text,
        };
        fetch("http://localhost:8080/api/text", {
          method: "post", //통신방법
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(textbox),
        })
          .then((res) => res.json())
          .then((json) => {
            console.log(json);
            setState({
              text: json.text,
            });
          });
      };
    return (
        <>
        <h2>이곳은 DB로 post전송을 실험하는 곳입니다.</h2>
            <input name="text" onChange={handlChange}></input>
            <button onClick={onclick}>전송</button>
        </>
    );
}

