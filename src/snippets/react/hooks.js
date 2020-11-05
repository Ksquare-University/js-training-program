function useState(initialValue) {

  let _val = initialValue

  function myVal() {
    return _val;
  }

  function setState(newVal){
    _val = newVal;
  }

  return [myVal, setState];
}



// lets create React

const ReactNG = (function() {
  let _val;
  return {
    render(Component) {
      const comp = Component();
      comp.render();
      return comp;
    },
    useState(initialValue) {
      _val = _val || initialValue;

      function setState(newVal){
        _val = newVal;
      }
    
      return [_val, setState];
    }
  }
})() 

// Counter component

function Counter() {
  const [count, setCount] = ReactNG.useState(0);

  return {
    click: () => setCount(count + 1),
    render: () => console.log(`render: ${count}`)
  }
}

let app = ReactNG.render(Counter);
app.click()
app = ReactNG.render(Counter);


