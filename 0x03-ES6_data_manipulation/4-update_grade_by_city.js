export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const selected = newGrades.map((grade) => grade.studentId);
  // console.log(selected);
  const filtered = listStudents.filter((student) => student.location === city);
  // console.log(filtered);
  const final = filtered.map((student) => {
    if (selected.includes(student.id)) {
      // console.log("true");
      const newGrade = newGrades.find((grade) => grade.studentId === student.id);
      return { ...student, grade: newGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return final;
}
