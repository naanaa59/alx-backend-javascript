export default function getListStudentIds(listStudents) {
  let arr = [];
  if (Array.isArray(listStudents)) {
    arr = listStudents.map((student) => student.id);
    // console.log(arr);
  }
  return arr;
}
