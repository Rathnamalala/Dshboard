// Application Constants

// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3
};

// API Endpoints
export const API_ENDPOINTS = {
  INPUTS: '/inputs',
  RECORDINGS: '/recordings',
  SCHEDULE: '/schedule',
  HISTORY: '/history',
  PROXY_QUEUE: '/proxy-queue',
  SOURCES: '/sources',
  SETTINGS: '/settings'
};

// Status Types
export const STATUS_TYPES = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  ERROR: 'error',
  WARNING: 'warning',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  PENDING: 'pending',
  RECORDING: 'recording',
  OFFLINE: 'offline',
  ONLINE: 'online'
};

// Input Types
export const INPUT_TYPES = {
  VIDEO: 'video',
  AUDIO: 'audio',
  MIXED: 'mixed',
  EXTERNAL: 'external',
  RTMP: 'rtmp',
  SRT: 'srt',
  UDP: 'udp',
  FILE: 'file'
};

// Recording States
export const RECORDING_STATES = {
  IDLE: 'idle',
  RECORDING: 'recording',
  PAUSED: 'paused',
  STOPPED: 'stopped',
  ERROR: 'error'
};

// Proxy Queue Status
export const PROXY_QUEUE_STATUS = {
  QUEUED: 'queued',
  PROCESSING: 'processing',
  COMPLETED: 'completed',
  FAILED: 'failed',
  CANCELLED: 'cancelled'
};

// Resolution Options
export const RESOLUTIONS = {
  '4K': '4096x2160',
  'UHD': '3840x2160',
  '1440P': '2560x1440',
  '1080P': '1920x1080',
  '720P': '1280x720',
  '480P': '854x480',
  '360P': '640x360'
};

// Bitrate Presets (in kbps)
export const BITRATE_PRESETS = {
  LOW: 1000,
  MEDIUM: 2500,
  HIGH: 5000,
  VERY_HIGH: 8000,
  ULTRA: 15000
};

// Refresh Intervals (in milliseconds)
export const REFRESH_INTERVALS = {
  FAST: 1000,      // 1 second
  NORMAL: 5000,    // 5 seconds
  SLOW: 30000,     // 30 seconds
  TIMER: 1000,     // 1 second for timers
  STATUS: 2000     // 2 seconds for status updates
};

// UI Configuration
export const UI_CONFIG = {
  TOAST_DURATION: 5000,
  ANIMATION_DURATION: 300,
  DEBOUNCE_DELAY: 500,
  MAX_RECENT_ITEMS: 10,
  PAGINATION_SIZE: 20
};

// Theme Colors (CSS Custom Properties)
export const THEME_COLORS = {
  PRIMARY: 'var(--bg-primary)',
  SECONDARY: 'var(--bg-secondary)',
  CARD: 'var(--bg-card)',
  TEXT_PRIMARY: 'var(--text-primary)',
  TEXT_SECONDARY: 'var(--text-secondary)',
  TEXT_MUTED: 'var(--text-muted)',
  ACCENT_BLUE: 'var(--accent-blue)',
  ACCENT_GREEN: 'var(--accent-green)',
  ACCENT_RED: 'var(--accent-red)',
  ACCENT_YELLOW: 'var(--accent-yellow)',
  BORDER: 'var(--border-color)',
  HOVER: 'var(--hover-bg)'
};

// Breakpoints (matching Bootstrap)
export const BREAKPOINTS = {
  XS: 0,
  SM: 576,
  MD: 768,
  LG: 992,
  XL: 1200,
  XXL: 1400
};

// Chart Configuration
export const CHART_CONFIG = {
  COLORS: {
    PRIMARY: '#3b82f6',
    SUCCESS: '#10b981',
    WARNING: '#f59e0b',
    DANGER: '#ef4444',
    INFO: '#06b6d4',
    SECONDARY: '#6b7280'
  },
  ANIMATION_DURATION: 750,
  RESPONSIVE: true
};

// File Upload Configuration
export const UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 500 * 1024 * 1024, // 500MB
  ALLOWED_VIDEO_TYPES: [
    'video/mp4',
    'video/avi',
    'video/mov',
    'video/mkv',
    'video/webm'
  ],
  ALLOWED_AUDIO_TYPES: [
    'audio/mp3',
    'audio/wav',
    'audio/aac',
    'audio/flac',
    'audio/ogg'
  ],
  CHUNK_SIZE: 1024 * 1024 // 1MB chunks
};

// Date and Time Formats
export const DATE_FORMATS = {
  SHORT: 'MMM dd',
  MEDIUM: 'MMM dd, yyyy',
  LONG: 'MMMM dd, yyyy',
  TIME_12: 'h:mm a',
  TIME_24: 'HH:mm',
  DATETIME: 'MMM dd, yyyy HH:mm',
  ISO: 'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx'
};

// Validation Rules
export const VALIDATION_RULES = {
  INPUT_NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
    PATTERN: /^[a-zA-Z0-9\s\-_]+$/
  },
  URL: {
    PATTERN: /^(https?|rtmp|srt|udp):\/\/[^\s]+$/
  },
  BITRATE: {
    MIN: 100,
    MAX: 50000
  },
  PORT: {
    MIN: 1,
    MAX: 65535
  }
};

// Local Storage Keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'broadcast_user_preferences',
  DASHBOARD_LAYOUT: 'broadcast_dashboard_layout',
  RECENT_INPUTS: 'broadcast_recent_inputs',
  FILTER_SETTINGS: 'broadcast_filter_settings',
  THEME_SETTINGS: 'broadcast_theme_settings'
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network connection error. Please check your connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  PERMISSION_ERROR: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  TIMEOUT: 'Request timed out. Please try again.',
  UNKNOWN: 'An unexpected error occurred.'
};

// Success Messages
export const SUCCESS_MESSAGES = {
  SAVED: 'Settings saved successfully',
  DELETED: 'Item deleted successfully',
  UPLOADED: 'File uploaded successfully',
  STARTED: 'Recording started successfully',
  STOPPED: 'Recording stopped successfully',
  SCHEDULED: 'Ingest scheduled successfully'
};

// Feature Flags (for development/testing)
export const FEATURE_FLAGS = {
  ENABLE_REAL_TIME: process.env.REACT_APP_ENABLE_REAL_TIME === 'true',
  ENABLE_NOTIFICATIONS: process.env.REACT_APP_ENABLE_NOTIFICATIONS !== 'false',
  ENABLE_ANALYTICS: process.env.REACT_APP_ENABLE_ANALYTICS === 'true',
  ENABLE_DEBUG: process.env.NODE_ENV === 'development'
};

// WebSocket Configuration
export const WEBSOCKET_CONFIG = {
  URL: process.env.REACT_APP_WS_URL || 'ws://localhost:3001/ws',
  RECONNECT_INTERVAL: 5000,
  MAX_RECONNECT_ATTEMPTS: 10,
  HEARTBEAT_INTERVAL: 30000
};

// Export all constants as a single object for easy importing
const constants = {
  API_CONFIG,
  API_ENDPOINTS,
  STATUS_TYPES,
  INPUT_TYPES,
  RECORDING_STATES,
  PROXY_QUEUE_STATUS,
  RESOLUTIONS,
  BITRATE_PRESETS,
  REFRESH_INTERVALS,
  UI_CONFIG,
  THEME_COLORS,
  BREAKPOINTS,
  CHART_CONFIG,
  UPLOAD_CONFIG,
  DATE_FORMATS,
  VALIDATION_RULES,
  STORAGE_KEYS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  FEATURE_FLAGS,
  WEBSOCKET_CONFIG
};

export default constants;