const koders = {
    rak: "koder",
    caro: "koder",
    daniela: "koder",
    antonio: "koder",
    daniel: "koder",
    edwin: "koder",
    manuel: "koder"
  }

  console.log(koders)
  function f (){
    const {rak,caro,daniela} = koders;
    return {rak,caro,daniela};
  }
  const mujeres = f();
  console.log(mujeres);



