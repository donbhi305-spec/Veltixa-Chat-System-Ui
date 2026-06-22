export interface Activity {
  id: string; // e.g. "LoginActivity"
  name: string; // e.g. "LoginActivity"
  category: string; // e.g. "AUTHENTICATION"
  description: string;
}

export interface Category {
  id: string; // e.g. "AUTHENTICATION"
  name: string; // e.g. "Authentication"
  activities: Activity[];
}

export interface UserProfile {
  username: string;
  fullName: string;
  bio: string;
  email: string;
  location: string;
  website: string;
  avatar: string;
  followers: string;
  following: string;
  chatsCount: number;
}

export interface Message {
  id: string;
  sender: 'user' | 'assistant' | 'other_user';
  senderName: string;
  text: string;
  timestamp: string;
  status?: 'sent' | 'delivered' | 'read';
  avatar?: string;
}

export interface ProductItem {
  id: string;
  title: string;
  price: string;
  description: string;
  rating: number;
  category: 'agent' | 'prompt' | 'theme' | 'addon';
  image: string;
}

export interface TaskItem {
  id: string;
  title: string;
  description: string;
  status: 'Backlog' | 'In Progress' | 'Review' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
  dueDate: string;
}
