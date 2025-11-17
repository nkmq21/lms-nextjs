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
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
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
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={() => router.push('/')}
            className="mb-4 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            ← Back to Classes
          </button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                {classData.name}
              </h1>
              <p className="mb-1 text-lg text-zinc-600 dark:text-zinc-400">
                {classData.subject}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                {classData.schedule}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
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
          <div className="rounded-lg bg-white p-4 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">Present</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {presentCount}
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">Late</p>
            <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
              {lateCount}
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">Absent</p>
            <p className="text-2xl font-bold text-red-600 dark:text-red-400">
              {absentCount}
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 dark:text-zinc-500">Unmarked</p>
            <p className="text-2xl font-bold text-zinc-600 dark:text-zinc-400">
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

        <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-zinc-900">
          <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
            <thead className="bg-zinc-50 dark:bg-zinc-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Student Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Student ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white dark:divide-zinc-800 dark:bg-zinc-900">
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
