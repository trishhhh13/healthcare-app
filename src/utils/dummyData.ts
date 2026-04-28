export const PATIENT_DATA = [
    { name: 'Mon', count: 45 },
    { name: 'Tue', count: 52 },
    { name: 'Wed', count: 48 },
    { name: 'Thu', count: 61 },
    { name: 'Fri', count: 55 },
    { name: 'Sat', count: 32 },
    { name: 'Sun', count: 28 },
];

export const SUMMARY_CARDS = [
    { title: 'Total Visits', value: '2,482', change: { value: '+12.5%', text: 'vs last month', isPositive: true } },
    { title: 'Avg. Stay Time', value: '45m', change: { value: '-5%', text: 'vs last month', isPositive: true } },
    { title: 'Patient Satisfaction', value: '98%', change: { value: '+2%', text: 'vs last month', isPositive: true } },
    { title: 'Revenue', value: '$42,500', change: { value: '+8.2%', text: 'vs last month', isPositive: true } },
];

export const VISIT_DATA = [
    { name: 'Jan', visits: 1200, revenue: 45000 },
    { name: 'Feb', visits: 1900, revenue: 52000 },
    { name: 'Mar', visits: 1500, revenue: 48000 },
    { name: 'Apr', visits: 2100, revenue: 61000 },
    { name: 'May', visits: 1800, revenue: 55000 },
    { name: 'Jun', visits: 2400, revenue: 72000 },
];

export const DEPT_DATA = [
    { name: 'Cardiology', value: 40, color: '#6366f1' },
    { name: 'Neurology', value: 25, color: '#8b5cf6' },
    { name: 'Pediatrics', value: 20, color: '#ec4899' },
    { name: 'Orthopedics', value: 15, color: '#f59e0b' },
];

export const RECENT_APPOINTMENTS = [
    { id: 1, name: 'John Doe', type: 'General Checkup', time: 'Today, 10:00 AM', status: 'Confirmed', img: 'JD' },
    { id: 2, name: 'Jane Smith', type: 'Dental Cleaning', time: 'Today, 11:30 AM', status: 'Confirmed', img: 'JS' },
    { id: 3, name: 'Robert Brown', type: 'Consultation', time: 'Tomorrow, 9:00 AM', status: 'Pending', img: 'RB' },
    { id: 4, name: 'Emily Davis', type: 'Follow-up', time: 'Tomorrow, 2:30 PM', status: 'Confirmed', img: 'ED' },
];

export const GENDER_DATA = [
    { name: 'Male', value: 48, color: '#3b82f6' },
    { name: 'Female', value: 45, color: '#8b5cf6' },
    { name: 'Other', value: 7, color: '#9ca3af' },
];

export const TOP_CONDITIONS_DATA = [
    { name: 'Hypertension', value: 32 },
    { name: 'Diabetes Type II', value: 24 },
    { name: 'Asthma', value: 18 },
    { name: 'Osteoarthritis', value: 14 },
    { name: 'Anxiety Disorder', value: 12 },
];

export const MOCK_PATIENTS = [
    { id: 'PT001', name: 'John Doe', gender: 'Male', age: 45, email: 'john.doe@email.com', img: 'https://i.pravatar.cc/150?u=11' },
    { id: 'PT002', name: 'Jane Smith', gender: 'Female', age: 32, email: 'jane.smith@email.com', img: 'https://i.pravatar.cc/150?u=12' },
    { id: 'PT003', name: 'Robert Brown', gender: 'Male', age: 58, email: 'robert.brown@email.com', img: 'https://i.pravatar.cc/150?u=13' },
    { id: 'PT004', name: 'Emily Davis', gender: 'Female', age: 27, email: 'emily.davis@email.com', img: 'https://i.pravatar.cc/150?u=14' },
    { id: 'PT005', name: 'Michael Wilson', gender: 'Male', age: 41, email: 'michael.w@email.com', img: 'https://i.pravatar.cc/150?u=15' },
    { id: 'PT006', name: 'Sarah Johnson', gender: 'Female', age: 36, email: 'sarah.j@email.com', img: 'https://i.pravatar.cc/150?u=16' },
    { id: 'PT007', name: 'David Lee', gender: 'Male', age: 52, email: 'david.lee@email.com', img: 'https://i.pravatar.cc/150?u=17' },
    { id: 'PT008', name: 'Laura Martinez', gender: 'Female', age: 29, email: 'laura.m@email.com', img: 'https://i.pravatar.cc/150?u=18' },
];

export const NOTIFICATIONS_DATA = [
    { id: 1, title: 'New Appointment', message: 'You have a new appointment with Sarah Johnson.', time: '5m ago', unread: true },
    { id: 2, title: 'Lab Results Ready', message: 'The lab results for John Doe are now available.', time: '1h ago', unread: true },
    { id: 3, title: 'System Update', message: 'MedCare has been updated to version 2.1.0.', time: '2h ago', unread: false },
];
