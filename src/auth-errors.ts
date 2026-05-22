// Firebase Auth error code → user-friendly message.
// Kept in sync between iOS and web.

const MESSAGES: Record<string, string> = {
  'auth/email-already-in-use': 'That email is already signed up. Try signing in instead.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/operation-not-allowed': "This sign-in method isn't enabled. Contact support.",
  'auth/weak-password': 'Password is too short — use at least 6 characters.',
  'auth/user-disabled': 'This account has been disabled.',
  // Both 'user-not-found' and 'wrong-password' are collapsed to a single
  // generic message to prevent email enumeration (an attacker can otherwise
  // probe which addresses have accounts by distinguishing the two responses).
  // Matches the local-wrapper override behaviour on web + iOS so direct
  // imports of this map also get the safe copy.
  'auth/user-not-found': 'Email or password is incorrect.',
  'auth/wrong-password': 'Email or password is incorrect.',
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
