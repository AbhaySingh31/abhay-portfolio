/**
 * Admin Authentication Utility
 * Simple authentication for admin panel access
 */

// In production, store these securely in environment variables
const ADMIN_CREDENTIALS = {
  username: process.env.NEXT_PUBLIC_ADMIN_USERNAME || 'admin',
  password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123', // Change this!
}

export interface AdminSession {
  isAuthenticated: boolean
  username: string
  loginTime: number
}

/**
 * Verify admin credentials
 */
export function verifyCredentials(username: string, password: string): boolean {
  return username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password
}

/**
 * Create admin session
 */
export function createSession(username: string): AdminSession {
  const session: AdminSession = {
    isAuthenticated: true,
    username,
    loginTime: Date.now(),
  }
  
  // Store in localStorage (client-side only)
  if (typeof window !== 'undefined') {
    localStorage.setItem('admin_session', JSON.stringify(session))
  }
  
  return session
}

/**
 * Get current session
 */
export function getSession(): AdminSession | null {
  if (typeof window === 'undefined') return null
  
  try {
    const sessionData = localStorage.getItem('admin_session')
    if (!sessionData) return null
    
    const session: AdminSession = JSON.parse(sessionData)
    
    // Check if session is still valid (24 hours)
    const sessionAge = Date.now() - session.loginTime
    const maxAge = 24 * 60 * 60 * 1000 // 24 hours
    
    if (sessionAge > maxAge) {
      clearSession()
      return null
    }
    
    return session
  } catch {
    return null
  }
}

/**
 * Clear admin session (logout)
 */
export function clearSession(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('admin_session')
  }
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  const session = getSession()
  return session?.isAuthenticated || false
}
