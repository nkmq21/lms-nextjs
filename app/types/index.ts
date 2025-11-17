export interface Student {
  id: string;
  name: string;
  studentId: string;
  classId: string;
}

export interface Class {
  id: string;
  name: string;
  subject: string;
  schedule: string;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  classId: string;
  date: string;
  status: 'present' | 'absent' | 'late';
}
