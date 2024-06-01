export default function createIteratorObject(report) {
  const iteratorObject = {
    [Symbol.iterator]() {
      let departementIndex = 0;
      let employeeIndex = 0;

      const employeesList = report.allEmployees;
      // console.log(employeesList);
      const departementNames = Object.keys(employeesList);
      // console.log(departementNames);
      const numberOfDepart = report.getNumberOfDepartments(employeesList);
      // console.log(numberOfDepart);
      return {
        next() {
          if (departementIndex < numberOfDepart) {
            const department = departementNames[departementIndex];
            // console.log(department);
            const employees = employeesList[department];
            // console.log(employees);
            if (employeeIndex < employees.length) {
              const employeeName = employees[employeeIndex];
              // console.log(employeeName);
              employeeIndex += 1;
              return { value: employeeName, done: false };
            }
            departementIndex += 1;
            employeeIndex = 0;
            return this.next();
          }
          return { done: true };
        },
      };
    },
  };
  return iteratorObject;
}
