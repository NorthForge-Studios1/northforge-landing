import React, { useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User as FirebaseUser,
} from 'firebase/auth';
import { auth, googleProvider } from '../services/firebase';
import type { User } from '../types';
import { AuthContext } from '../context/AuthContext';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If auth is null (missing API key), fallback to a mock state
    if (!auth) {
      console.warn('Firebase Auth is not initialized. Using mock UI mode.');
      // Workaround for synchronous state update in effect
      setTimeout(() => setLoading(false), 0);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        // Here you would typically also fetch additional user data from your FastAPI backend
        // e.g., using firebaseUser.uid or await firebaseUser.getIdToken()
        const appUser: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          role: 'user', // Default role, would be overridden by backend data
        };
        setUser(appUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    if (!auth || !googleProvider) {
      console.warn('Firebase is not configured. Simulating successful login.');
      // Simulate login in mock mode
      setUser({
        uid: 'mock-user-123',
        email: 'mockuser@example.com',
        displayName: 'Mock Developer',
        photoURL: null,
        role: 'user',
      });
      return;
    }

    try {
      await signInWithPopup(auth, googleProvider);
      // The onAuthStateChanged listener will handle the state update
    } catch (error) {
      console.error('Error signing in with Google', error);
      throw error;
    }
  };

  const logout = async () => {
    if (!auth) {
      // Simulate logout in mock mode
      setUser(null);
      return;
    }

    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
