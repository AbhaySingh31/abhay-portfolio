/**
 * Error Logger Utility
 * Captures and logs client-side errors, console logs, and network errors
 * Stores logs in localStorage and optionally sends to server
 */

export interface ErrorLog {
  timestamp: string
  type: 'error' | 'warning' | 'info' | 'log' | 'network'
  message: string
  stack?: string
  url?: string
  lineNumber?: number
  columnNumber?: number
  userAgent?: string
  additionalData?: any
}

class ErrorLogger {
  private logs: ErrorLog[] = []
  private maxLogs = 100
  private storageKey = 'app_error_logs'

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadLogsFromStorage()
      this.setupGlobalErrorHandlers()
    }
  }

  /**
   * Setup global error handlers for window errors and unhandled rejections
   */
  private setupGlobalErrorHandlers() {
    // Capture runtime errors
    window.addEventListener('error', (event) => {
      this.logError({
        type: 'error',
        message: event.message,
        stack: event.error?.stack,
        url: event.filename,
        lineNumber: event.lineno,
        columnNumber: event.colno,
      })
    })

    // Capture unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.logError({
        type: 'error',
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
      })
    })

    // Override console methods to capture logs
    this.interceptConsole()
  }

  /**
   * Intercept console methods to capture all console output
   */
  private interceptConsole() {
    const originalConsole = {
      log: console.log,
      error: console.error,
      warn: console.warn,
      info: console.info,
      groupCollapsed: console.groupCollapsed,
      groupEnd: console.groupEnd,
    }

    // Store original console for use in logError method
    if (typeof window !== 'undefined') {
      (window as any).__originalConsole = originalConsole
    }

    console.log = (...args: any[]) => {
      originalConsole.log(...args)
      this.logErrorSilent({
        type: 'log',
        message: args.map(arg => this.stringifyArg(arg)).join(' '),
      })
    }

    console.error = (...args: any[]) => {
      originalConsole.error(...args)
      this.logErrorSilent({
        type: 'error',
        message: args.map(arg => this.stringifyArg(arg)).join(' '),
        stack: args[0]?.stack,
      })
    }

    console.warn = (...args: any[]) => {
      originalConsole.warn(...args)
      this.logErrorSilent({
        type: 'warning',
        message: args.map(arg => this.stringifyArg(arg)).join(' '),
      })
    }

    console.info = (...args: any[]) => {
      originalConsole.info(...args)
      this.logErrorSilent({
        type: 'info',
        message: args.map(arg => this.stringifyArg(arg)).join(' '),
      })
    }
  }

  /**
   * Convert any argument to string for logging
   */
  private stringifyArg(arg: any): string {
    if (typeof arg === 'string') return arg
    if (arg instanceof Error) return `${arg.message}\n${arg.stack}`
    try {
      return JSON.stringify(arg, null, 2)
    } catch {
      return String(arg)
    }
  }

  /**
   * Log an error silently (without console output to prevent infinite loops)
   */
  private logErrorSilent(error: Partial<ErrorLog>) {
    const log: ErrorLog = {
      timestamp: new Date().toISOString(),
      type: error.type || 'error',
      message: error.message || 'Unknown error',
      stack: error.stack,
      url: error.url || (typeof window !== 'undefined' ? window.location.href : undefined),
      lineNumber: error.lineNumber,
      columnNumber: error.columnNumber,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      additionalData: error.additionalData,
    }

    this.logs.push(log)

    // Keep only the last maxLogs entries
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(-this.maxLogs)
    }

    this.saveLogsToStorage()
  }

  /**
   * Log an error with metadata (public method with console output)
   */
  logError(error: Partial<ErrorLog>) {
    this.logErrorSilent(error)
    
    // In development, also log to console for immediate visibility
    // Use original console methods to avoid infinite loop
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      const originalConsole = (window as any).__originalConsole
      if (originalConsole) {
        originalConsole.groupCollapsed(`[ErrorLogger] ${error.type?.toUpperCase() || 'ERROR'}: ${error.message}`)
        originalConsole.log('Timestamp:', new Date().toISOString())
        if (error.stack) originalConsole.log('Stack:', error.stack)
        if (error.url) originalConsole.log('URL:', error.url)
        originalConsole.groupEnd()
      }
    }
  }

  /**
   * Get all logged errors
   */
  getLogs(): ErrorLog[] {
    return [...this.logs]
  }

  /**
   * Get logs filtered by type
   */
  getLogsByType(type: ErrorLog['type']): ErrorLog[] {
    return this.logs.filter(log => log.type === type)
  }

  /**
   * Clear all logs
   */
  clearLogs() {
    this.logs = []
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.storageKey)
    }
  }

  /**
   * Export logs as JSON string
   */
  exportLogs(): string {
    return JSON.stringify(this.logs, null, 2)
  }

  /**
   * Download logs as a file
   */
  downloadLogs() {
    const dataStr = this.exportLogs()
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `error-logs-${new Date().toISOString()}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  /**
   * Save logs to localStorage
   */
  private saveLogsToStorage() {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(this.storageKey, JSON.stringify(this.logs))
      } catch (error) {
        // Storage might be full or disabled
        console.warn('Failed to save logs to localStorage:', error)
      }
    }
  }

  /**
   * Load logs from localStorage
   */
  private loadLogsFromStorage() {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(this.storageKey)
        if (stored) {
          this.logs = JSON.parse(stored)
        }
      } catch (error) {
        console.warn('Failed to load logs from localStorage:', error)
      }
    }
  }

  /**
   * Send logs to a server endpoint (optional)
   */
  async sendLogsToServer(endpoint: string = '/api/logs') {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: this.exportLogs(),
      })
      return response.ok
    } catch (error) {
      console.error('Failed to send logs to server:', error)
      return false
    }
  }
}

// Create singleton instance
export const errorLogger = new ErrorLogger()

// Export for use in components
export default errorLogger
