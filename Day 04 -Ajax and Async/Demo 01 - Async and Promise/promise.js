let promise = new Promise(
  //executer
  function (resolve, reject) {
    //logic
    // thành công :  resolve()
    // thất bại : reject()
    resolve([
      {
        id: 1,
        name: "javascript",
      },
    ]);
  }
);
promise
  .then( (result)=> {
    // resolve
    console.log(result);
  })
  .catch( (error)=> {
    // reject
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Finished");
  });
