'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import AttendanceRow from '../../components/AttendanceRow';
import { mockClasses, mockStudents } from '../../data/mockData';

export default function AttendancePage() {
  const params = useParams();
  const router = useRouter();
  const classId = params.classId as string;

  const classData = mockClasses.find((c) => c.id === classId);
  const students = mockStudents.filter((s) => s.classId === classId);

  const [attendance, setAttendance] = useState<Record<string, 'present' | 'absent' | 'late'>>({});
  const [isSaved, setIsSaved] = useState(false);

  const handleStatusChange = (studentId: string, status: 'present' | 'absent' | 'late') => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleMarkAllPresent = () => {
    const allPresent: Record<string, 'present' | 'absent' | 'late'> = {};
    students.forEach((student) => {
      allPresent[student.id] = 'present';
    });
    setAttendance(allPresent);
    setIsSaved(false);
  };

  if (!classData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-slate-900">
            Class not found
          </h1>
          <button
            onClick={() => router.push('/')}
            className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
          >
            Back to Classes
          </button>
        </div>
      </div>
    );
  }

  const presentCount = Object.values(attendance).filter((s) => s === 'present').length;
  const lateCount = Object.values(attendance).filter((s) => s === 'late').length;
  const absentCount = Object.values(attendance).filter((s) => s === 'absent').length;
  const unmarkedCount = students.length - Object.keys(attendance).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => router.push('/')}
            className="mb-4 text-sm text-blue-600 hover:text-blue-700"
          >
            ← Back to Classes
          </button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-slate-900">
                {classData.name}
              </h1>
              <p className="mb-1 text-lg text-slate-600">
                {classData.subject}
              </p>
              <p className="text-sm text-slate-500">
                {classData.schedule}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-500">
                {new Date().toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow">
            <p className="text-sm text-slate-500">Present</p>
            <p className="text-2xl font-bold text-green-600">
              {presentCount}
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <p className="text-sm text-slate-500">Late</p>
            <p className="text-2xl font-bold text-yellow-600">
              {lateCount}
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <p className="text-sm text-slate-500">Absent</p>
            <p className="text-2xl font-bold text-red-600">
              {absentCount}
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow">
            <p className="text-sm text-slate-500">Unmarked</p>
            <p className="text-2xl font-bold text-slate-600">
              {unmarkedCount}
            </p>
          </div>
        </div>

        <div className="mb-6 flex gap-4">
          <button
            onClick={handleMarkAllPresent}
            className="rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
          >
            Mark All Present
          </button>
          <button
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
          >
            {isSaved ? 'Saved!' : 'Save Attendance'}
          </button>
        </div>

        <div className="overflow-hidden rounded-lg bg-white shadow">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                  Student ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {students.map((student) => (
                <AttendanceRow
                  key={student.id}
                  student={student}
                  status={attendance[student.id] || null}
                  onStatusChange={handleStatusChange}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
