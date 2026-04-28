export const SCREENS = [
  {
    name: 'home',
    title: 'Home',
    route: '/home'
  },
  {
    name: 'analytics',
    title: 'Analytics',
    route: '/analytics'
  },
  {
    name: 'patient-details',
    title: 'Patient Details',
    route: '/patient-details'
  },
  {
    name: 'profile',
    title: 'Profile',
    route: '/profile'
  }
];

export const OVERVIEW_CARDS = [
  {
    title: 'Appointments',
    value: '124',
    change: { value: '+5.2%', text: 'from last month', isPositive: true }
  },
  {
    title: 'Patients',
    value: '42',
    change: { value: '+12.9%', text: 'from last month', isPositive: true }
  },
  {
    title: 'Monthly Revenue',
    value: '₹500000',
    change: { value: '-2.4%', text: 'from last month', isPositive: false }
  },
  {
    title: 'New Prescriptions',
    value: '14',
    change: { value: '+8.1%', text: 'from last month', isPositive: true }
  },
  {
    title: 'Pending Appointments',
    value: '8',
    change: { value: '+1.2%', text: 'from last month', isPositive: true }
  }
]