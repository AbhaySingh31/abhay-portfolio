# Error Monitoring Framework

## Overview

A comprehensive error monitoring system that captures and displays all console logs, errors, warnings, and runtime exceptions during development.

## Features

### 🎯 Automatic Error Capture
- **Runtime Errors**: Catches all JavaScript errors and exceptions
- **Unhandled Promises**: Captures unhandled promise rejections
- **Console Logs**: Intercepts all console.log, console.error, console.warn, console.info
- **Stack Traces**: Preserves full stack traces for debugging
- **Metadata**: Records timestamp, URL, line numbers, and user agent

### 💾 Persistent Storage
- Logs stored in browser localStorage
- Survives page reloads and navigation
- Maximum 100 logs retained (auto-cleanup)
- Export logs as JSON file

### 🎨 Developer Interface
- **Floating Button**: Bottom-right corner with error count badge
- **Filter Panel**: Filter by type (all, error, warning, info, log, network)
- **Real-time Updates**: Auto-refreshes every 2 seconds when open
- **Download**: Export all logs as JSON for sharing
- **Clear**: Remove all logs with one click

### 🔒 Development Only
- Only visible in development mode
- Automatically disabled in production builds
- Zero performance impact on production

## Usage

### Viewing Logs

1. **Open the Panel**: Click the floating purple/pink button in the bottom-right corner
2. **Filter Logs**: Use the filter tabs to view specific log types
3. **View Details**: Click on any log to expand stack traces
4. **Download**: Click "Download" to save logs as JSON
5. **Clear**: Click "Clear" to remove all logs

### Programmatic Usage

```typescript
import errorLogger from '@/lib/errorLogger'

// Manual logging
errorLogger.logError({
  type: 'error',
  message: 'Custom error message',
  additionalData: { userId: 123, action: 'submit' }
})

// Get all logs
const allLogs = errorLogger.getLogs()

// Get logs by type
const errors = errorLogger.getLogsByType('error')

// Export logs
const jsonLogs = errorLogger.exportLogs()

// Clear logs
errorLogger.clearLogs()

// Send logs to server (optional)
await errorLogger.sendLogsToServer('/api/logs')
```

### Console Integration

All console methods are automatically intercepted:

```javascript
console.log('This will be captured')
console.error('This error will be logged')
console.warn('This warning will be saved')
console.info('This info will be stored')
```

## Architecture

### Components

1. **`lib/errorLogger.ts`**
   - Core error logging utility
   - Singleton pattern for global access
   - localStorage persistence
   - Console interception
   - Global error handlers

2. **`components/ErrorMonitor.tsx`**
   - React component for UI
   - Floating button with badge
   - Filterable log panel
   - Download and clear functionality
   - Development-only rendering

3. **`app/layout.tsx`**
   - Integration point
   - Renders ErrorMonitor globally

### Data Structure

```typescript
interface ErrorLog {
  timestamp: string          // ISO 8601 format
  type: 'error' | 'warning' | 'info' | 'log' | 'network'
  message: string           // Error message or log content
  stack?: string           // Stack trace (if available)
  url?: string            // Page URL where error occurred
  lineNumber?: number     // Line number (if available)
  columnNumber?: number   // Column number (if available)
  userAgent?: string      // Browser user agent
  additionalData?: any    // Custom data
}
```

## Sharing Logs with AI/Team

### Method 1: Download JSON
1. Click the floating error button
2. Click "Download" button
3. Share the JSON file

### Method 2: Copy from Console
```javascript
// In browser console
console.log(errorLogger.exportLogs())
```

### Method 3: Server Upload (Future)
```typescript
// Implement API endpoint
await errorLogger.sendLogsToServer('/api/logs')
```

## Best Practices

### For Development
- Keep the panel open while testing new features
- Check logs after each major interaction
- Download logs before clearing for record-keeping
- Use filter tabs to focus on specific issues

### For Debugging
- Look at timestamps to correlate with user actions
- Check stack traces for exact error locations
- Review all logs, not just errors (warnings can indicate issues)
- Export logs when reporting bugs

### For Team Collaboration
- Download and share logs when asking for help
- Include logs in bug reports
- Reference specific timestamps when discussing issues

## Limitations

- Maximum 100 logs stored (older logs auto-deleted)
- localStorage has size limits (~5-10MB)
- Only captures client-side errors (not server-side)
- Development mode only (disabled in production)

## Future Enhancements

- [ ] Network request/response logging
- [ ] Performance metrics tracking
- [ ] Server-side log aggregation
- [ ] Email/Slack notifications for critical errors
- [ ] Log search and filtering
- [ ] Session replay integration
- [ ] Error grouping and deduplication

## Troubleshooting

### Panel Not Showing
- Ensure you're in development mode (`npm run dev`)
- Check if `process.env.NODE_ENV === 'development'`
- Verify ErrorMonitor is imported in layout.tsx

### Logs Not Persisting
- Check browser localStorage is enabled
- Verify localStorage quota not exceeded
- Check browser console for storage errors

### Missing Stack Traces
- Some errors don't have stack traces (normal)
- Console logs don't have stack traces
- Only Error objects have stack traces

## Integration with Cascade AI

This framework was designed to work seamlessly with Cascade AI:

1. **Direct Reading**: Cascade can read the error logs from localStorage
2. **JSON Export**: Download and share logs in chat
3. **Console Access**: Cascade can access browser console output
4. **Real-time Monitoring**: Cascade can monitor the error panel

### Sharing with Cascade

Simply say: "Check the error logs" or "What errors are showing in the error monitor?"

Cascade can then:
- Read the logs from the panel
- Analyze error patterns
- Suggest fixes
- Help debug issues
