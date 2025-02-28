export interface User {
  name: string;
  username: string;
  title: string;
  email: string;
  photoUrl: string;
  courseCount: number;
}

export interface TabItem {
  label: string;
  isActive?: boolean;
}

export interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  title: string;
}
