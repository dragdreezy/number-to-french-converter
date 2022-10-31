import React, { useState } from "react";

const App = () => {
  const [number, setNum] = useState({
        value:'',
        show:''
    });

  const handleChange = (e) => {
    setNum({value: e.target.value})
}

const submit = () => {
    setNum({show: number.value})
}

  var writtenNumber = require('number-in-letters');
  var val = number.show;
  var num = writtenNumber(val, { lang: 'fr' });

  return (
    <div>
    <div class="form-floating">
    <form>
    <input type="text" name="num" class="form-control mb-2 number" autocomplete="off" value={number.value} onChange={(e)=>handleChange(e)} />
    <button class="w-100 btn btn-lg btn-primary mb-3" type="button" onClick={()=>submit()}>Convert</button>
    </form>
      <p>{num}</p>
      </div>
      </div>
  );
}

export default App
