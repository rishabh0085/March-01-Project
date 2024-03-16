let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    const developers = arr.filter(employee => employee.profession === "developer");
    console.log(developers);
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    const filteredArr = arr.filter(employee => employee.profession !== "admin");
    console.log(filteredArr);
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 5, name: "emma", age: "22", profession: "designer" },
      { id: 6, name: "alex", age: "25", profession: "manager" },
      { id: 7, name: "lucas", age: "23", profession: "developer" }
    ];
    const concatenatedArray = arr.concat(newArray);
    console.log(concatenatedArray);
  }
  
  // Testing the functions
  PrintDeveloperbyMap();
  PrintDeveloperbyForEach();
  addData();
  removeAdmin();
  concatenateArray();
  