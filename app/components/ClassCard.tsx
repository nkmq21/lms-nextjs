import Link from 'next/link';
import { Class } from '../types';

interface ClassCardProps {
  classData: Class;
  studentCount: number;
}

export default function ClassCard({ classData, studentCount }: ClassCardProps) {
  return (
    <Link href={`/attendance/${classData.id}`}>
      <div className="block rounded-lg border border-zinc-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-400">
        <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
          {classData.name}
        </h3>
        <p className="mb-3 text-sm text-zinc-600 dark:text-zinc-400">
          {classData.subject}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-zinc-500 dark:text-zinc-500">
            {classData.schedule}
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            {studentCount} students
          </span>
        </div>
      </div>
    </Link>
  );
}
