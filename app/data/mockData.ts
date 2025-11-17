import { Class, Student, AttendanceRecord } from '../types';

export const mockClasses: Class[] = [
  {
    id: '1',
    name: 'Computer Science 101',
    subject: 'Introduction to Programming',
    schedule: 'Mon, Wed, Fri - 9:00 AM',
  },
  {
    id: '2',
    name: 'Mathematics 201',
    subject: 'Calculus II',
    schedule: 'Tue, Thu - 10:30 AM',
  },
  {
    id: '3',
    name: 'Physics 301',
    subject: 'Quantum Mechanics',
    schedule: 'Mon, Wed - 2:00 PM',
  },
  {
    id: '4',
    name: 'English 102',
    subject: 'Creative Writing',
    schedule: 'Tue, Thu - 1:00 PM',
  },
];

export const mockStudents: Student[] = [
  { id: '1', name: 'Alice Johnson', studentId: 'STU001', classId: '1' },
  { id: '2', name: 'Bob Smith', studentId: 'STU002', classId: '1' },
  { id: '3', name: 'Charlie Brown', studentId: 'STU003', classId: '1' },
  { id: '4', name: 'Diana Prince', studentId: 'STU004', classId: '1' },
  { id: '5', name: 'Ethan Hunt', studentId: 'STU005', classId: '1' },
  { id: '6', name: 'Fiona Gallagher', studentId: 'STU006', classId: '2' },
  { id: '7', name: 'George Miller', studentId: 'STU007', classId: '2' },
  { id: '8', name: 'Hannah Baker', studentId: 'STU008', classId: '2' },
  { id: '9', name: 'Ian Malcolm', studentId: 'STU009', classId: '2' },
  { id: '10', name: 'Julia Roberts', studentId: 'STU010', classId: '3' },
  { id: '11', name: 'Kevin Hart', studentId: 'STU011', classId: '3' },
  { id: '12', name: 'Laura Croft', studentId: 'STU012', classId: '3' },
  { id: '13', name: 'Michael Scott', studentId: 'STU013', classId: '4' },
  { id: '14', name: 'Nancy Drew', studentId: 'STU014', classId: '4' },
  { id: '15', name: 'Oscar Wilde', studentId: 'STU015', classId: '4' },
];

export const mockAttendance: AttendanceRecord[] = [];
