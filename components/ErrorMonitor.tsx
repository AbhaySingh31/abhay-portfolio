'use client'

/**
 * Error Monitor Component
 * Initializes error logging and provides a dev panel to view logs
 */

import { useEffect, useState } from 'react'
import errorLogger, { ErrorLog } from '@/lib/errorLogger'

export default function ErrorMonitor() {
  const [showPanel, setShowPanel] = useState(false)
  const [logs, setLogs] = useState<ErrorLog[]>([])
  const [filter, setFilter] = useState<ErrorLog['type'] | 'all'>('all')

  useEffect(() => {
    // Initialize error logger (it auto-starts on import)
    // Refresh logs every 2 seconds when panel is open
    if (showPanel) {
      const interval = setInterval(() => {
        setLogs(errorLogger.getLogs())
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [showPanel])

  const handleTogglePanel = () => {
    if (!showPanel) {
      setLogs(errorLogger.getLogs())
    }
    setShowPanel(!showPanel)
  }

  const handleClearLogs = () => {
    errorLogger.clearLogs()
    setLogs([])
  }

  const handleDownloadLogs = () => {
    errorLogger.downloadLogs()
  }

  const filteredLogs = filter === 'all' 
    ? logs 
    : logs.filter(log => log.type === filter)

  const getTypeColor = (type: ErrorLog['type']) => {
    switch (type) {
      case 'error': return 'text-red-500'
      case 'warning': return 'text-yellow-500'
      case 'info': return 'text-blue-500'
      case 'log': return 'text-gray-500'
      case 'network': return 'text-purple-500'
      default: return 'text-gray-500'
    }
  }

  const getTypeBadgeColor = (type: ErrorLog['type']) => {
    switch (type) {
      case 'error': return 'bg-red-500/10 text-red-500 border-red-500/20'
      case 'warning': return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
      case 'info': return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      case 'log': return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
      case 'network': return 'bg-purple-500/10 text-purple-500 border-purple-500/20'
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={handleTogglePanel}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-3 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        title="Toggle Error Monitor"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        {logs.length > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
            {logs.length > 99 ? '99+' : logs.length}
          </span>
        )}
      </button>

      {/* Error Monitor Panel */}
      {showPanel && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleTogglePanel}
          />

          {/* Panel */}
          <div className="relative z-10 flex h-[80vh] w-full max-w-4xl flex-col rounded-lg border border-gray-700 bg-gray-900 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-700 p-4">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white">Error Monitor</h2>
                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-400">
                  {filteredLogs.length} logs
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadLogs}
                  className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                  title="Download logs as JSON"
                >
                  Download
                </button>
                <button
                  onClick={handleClearLogs}
                  className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-red-700"
                >
                  Clear
                </button>
                <button
                  onClick={handleTogglePanel}
                  className="rounded-md bg-gray-700 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 border-b border-gray-700 p-4">
              {(['all', 'error', 'warning', 'info', 'log', 'network'] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    filter === type
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                  {type !== 'all' && (
                    <span className="ml-1.5 text-xs opacity-60">
                      ({logs.filter(log => log.type === type).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Logs List */}
            <div className="flex-1 overflow-y-auto p-4">
              {filteredLogs.length === 0 ? (
                <div className="flex h-full items-center justify-center text-gray-500">
                  <div className="text-center">
                    <p className="text-lg font-medium">No logs yet</p>
                    <p className="text-sm">Errors and console logs will appear here</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredLogs.map((log, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-700 bg-gray-800/50 p-4 transition-colors hover:bg-gray-800"
                    >
                      <div className="mb-2 flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className={`rounded border px-2 py-0.5 text-xs font-medium ${getTypeBadgeColor(log.type)}`}>
                            {log.type.toUpperCase()}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(log.timestamp).toLocaleTimeString()}
                          </span>
                        </div>
                      </div>
                      <p className={`mb-2 font-mono text-sm ${getTypeColor(log.type)}`}>
                        {log.message}
                      </p>
                      {log.stack && (
                        <details className="mt-2">
                          <summary className="cursor-pointer text-xs text-gray-400 hover:text-gray-300">
                            Stack trace
                          </summary>
                          <pre className="mt-2 overflow-x-auto rounded bg-gray-900 p-2 text-xs text-gray-400">
                            {log.stack}
                          </pre>
                        </details>
                      )}
                      {(log.url || log.lineNumber) && (
                        <div className="mt-2 text-xs text-gray-500">
                          {log.url && <div>URL: {log.url}</div>}
                          {log.lineNumber && (
                            <div>
                              Line: {log.lineNumber}
                              {log.columnNumber && `:${log.columnNumber}`}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
