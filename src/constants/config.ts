/**
 * Application Configuration Constants
 * Centralized configuration for colors, theme, and API settings
 */

export const THEME_COLORS = {
    PRIMARY: '#1976d2',
    SECONDARY: '#dc004e',
    SUCCESS: '#4caf50',
    WARNING: '#ff9800',
    ERROR: '#f44336',
    INFO: '#2196f3',
    BACKGROUND: '#ffffff',
    SURFACE: '#f5f5f5',
    TEXT_PRIMARY: '#212121',
    TEXT_SECONDARY: '#757575',
};

export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
};

export const PAGINATION = {
    DEFAULT_PAGE_SIZE: 10,
    PAGE_SIZE_OPTIONS: [10, 25, 50, 100],
};

export const NOTIFICATIONS = {
    TOAST_DURATION: 3000,
    POSITION: 'top-right',
};
