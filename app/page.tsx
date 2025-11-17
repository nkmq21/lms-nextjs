import ClassCard from './components/ClassCard';
import { mockClasses, mockStudents } from './data/mockData';

export default function Home() {
  const getStudentCount = (classId: string) => {
    return mockStudents.filter(student => student.classId === classId).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="mb-3 text-4xl font-bold text-slate-900">
            LMS Attendance System
          </h1>
          <p className="text-lg text-slate-600">
            Select a class to take attendance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockClasses.map((classData) => (
            <ClassCard
              key={classData.id}
              classData={classData}
              studentCount={getStudentCount(classData.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
