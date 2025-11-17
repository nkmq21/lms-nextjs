'use client';

import { Student } from '../types';

interface AttendanceRowProps {
  student: Student;
  status: 'present' | 'absent' | 'late' | null;
  onStatusChange: (studentId: string, status: 'present' | 'absent' | 'late') => void;
}

export default function AttendanceRow({ student, status, onStatusChange }: AttendanceRowProps) {
  return (
    <tr className="border-b border-slate-200">
      <td className="px-6 py-4 text-sm font-medium text-slate-900">
        {student.name}
      </td>
      <td className="px-6 py-4 text-sm text-slate-600">
        {student.studentId}
      </td>
      <td className="px-6 py-4">
        <div className="flex gap-2">
          <button
            onClick={() => onStatusChange(student.id, 'present')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              status === 'present'
                ? 'bg-green-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-green-100 hover:text-green-700'
            }`}
          >
            Present
          </button>
          <button
            onClick={() => onStatusChange(student.id, 'late')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              status === 'late'
                ? 'bg-yellow-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-yellow-100 hover:text-yellow-700'
            }`}
          >
            Late
          </button>
          <button
            onClick={() => onStatusChange(student.id, 'absent')}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              status === 'absent'
                ? 'bg-red-600 text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-700'
            }`}
          >
            Absent
          </button>
        </div>
      </td>
    </tr>
  );
}
