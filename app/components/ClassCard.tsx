import Link from 'next/link';
import { Class } from '../types';

interface ClassCardProps {
  classData: Class;
  studentCount: number;
}

export default function ClassCard({ classData, studentCount }: ClassCardProps) {
  return (
    <Link href={`/attendance/${classData.id}`}>
      <div className="block rounded-lg border border-slate-200 bg-white p-6 shadow-md transition-all hover:border-blue-400 hover:shadow-xl">
        <h3 className="mb-2 text-xl font-semibold text-slate-900">
          {classData.name}
        </h3>
        <p className="mb-3 text-sm text-slate-600">
          {classData.subject}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-500">
            {classData.schedule}
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            {studentCount} students
          </span>
        </div>
      </div>
    </Link>
  );
}
