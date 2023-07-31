export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  // This Filters students by location
  // This Change/add grade for students in newGrades
  // If a filtered student is not in new Grades => grade = N/A

  const cityStudents = students.filter((student) => student.location === city).map((student) => {
    const item2 = newGrades.find((student2) => student.id === student2.studentId);
    // });
    // console.log('FOUND STUDENT1: ', student);
    // console.log('FOUND ITEM2: ', item2);
    // console.log(item2 ? {...student, ...item2} : student.grade = 'N/A', student);
    // if (!item2) {
    //   student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    // }
    return { ...student, grade: item2 ? item2.grade : 'N/A' };
    // return item2 ? {...student, ...item2} : student,  student.grade = 'M/A';
  });
  return cityStudents;
}
