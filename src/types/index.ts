export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role?: 'user' | 'indie_dev' | 'admin';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  authorId: string;
  status: 'pending' | 'approved' | 'rejected';
  demoUrl?: string;
  votes: number;
  createdAt: string;
}

export interface Review {
  id: string;
  projectId: string;
  userId: string;
  comment: string;
  rating?: number;
  createdAt: string;
}
