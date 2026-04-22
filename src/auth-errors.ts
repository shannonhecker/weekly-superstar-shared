// Firebase Auth error code → user-friendly message.
// Kept in sync between iOS and web.

const MESSAGES: Record<string, string> = {
  'auth/email-already-in-use': 'That email is already signed up. Try signing in instead.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/operation-not-allowed': "This sign-in method isn't enabled. Contact support.",
  'auth/weak-password': 'Password is too short — use at least 6 characters.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/user-not-found': 'No account found with that email.',
  'auth/wrong-password': 'Incorrect password. Try again.',
  'auth/invalid-credential': 'Incorrect email or password.',
  'auth/invalid-login-credentials': 'Incorrect email or password.',
  'auth/missing-email': 'Enter your email to reset your password.',
  'auth/too-many-requests': 'Too many tries. Wait a minute and try again.',
  'auth/network-request-failed': 'Network trouble — check your connection.',
  'auth/popup-closed-by-user': 'Sign-in was cancelled.',
}

export function formatAuthError(err: unknown): string {
  if (!err) return 'Something went wrong. Try again.'
  const e = err as { code?: string; message?: string }
  const code = e.code || e.message || ''
  return MESSAGES[code] || 'Something went wrong. Try again.'
}
