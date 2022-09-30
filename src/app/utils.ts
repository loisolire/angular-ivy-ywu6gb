export const getDateString = (date: Date): string => {
  return date.toISOString().substring(0, 10);
}
export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
