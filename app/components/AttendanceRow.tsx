'use client';

import { Student } from '../types';

interface AttendanceRowProps {
  student: Student;
  status: 'present' | 'absent' | 'late' | null;
  onStatusChange: (studentId: string, status: 'present' | 'absent' | 'late') => void;
}

export default function AttendanceRow({ student, status, onStatusChange }: AttendanceRowProps) {
  return (
    <tr className="border-b border-zinc-200 dark:border-zinc-800">
      <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-50">
        {student.name}
      </td>
      <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">
        {student.studentId}
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <button
            onClick={() => onStatusChange(student.id, 'present')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              status === 'present'
                ? 'bg-green-600 text-white'
                : 'bg-zinc-100 text-zinc-700 hover:bg-green-100 hover:text-green-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-green-900/30 dark:hover:text-green-300'
            }`}
          >
            Present
          </button>
          <button
            onClick={() => onStatusChange(student.id, 'late')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              status === 'late'
                ? 'bg-yellow-600 text-white'
                : 'bg-zinc-100 text-zinc-700 hover:bg-yellow-100 hover:text-yellow-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-yellow-900/30 dark:hover:text-yellow-300'
            }`}
          >
            Late
          </button>
          <button
            onClick={() => onStatusChange(student.id, 'absent')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              status === 'absent'
                ? 'bg-red-600 text-white'
                : 'bg-zinc-100 text-zinc-700 hover:bg-red-100 hover:text-red-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-red-900/30 dark:hover:text-red-300'
            }`}
          >
            Absent
          </button>
        </div>
      </td>
    </tr>
  );
}
