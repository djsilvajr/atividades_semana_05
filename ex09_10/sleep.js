function sleep(obj) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(obj), 3000);
    });
  }
  
  sleep({ nome: "teste", idade: 21 }).then((res) => console.log(res));
  