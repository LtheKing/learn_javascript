const onChange = event => {
      localStorage.setItem('myValueInLocalStorage', event.target.value);
      setValue(event.target.value);
    };