export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((total, student) => total + student.id, 0);
}
