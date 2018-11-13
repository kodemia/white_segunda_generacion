const koders = {
    rak: "koder",
    caro: "koder",
    daniela: "koder",
    antonio: "koder",
    daniel: "koder",
    edwin: "koder",
    manuel: "koder"
  }
//  console.log(koders)

  function f (){
    const {rak:Rak,caro:Caro,daniela:Daniela,antonio:Antonio,daniel:Daniel,edwin:Edwin,manuel:Manuel} = koders;
    return {Rak,Caro,Daniela,Antonio,Daniel,Edwin,Manuel};
  }
  const mujeres = f();
  console.log(mujeres);

