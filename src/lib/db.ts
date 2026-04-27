/**
 * Centralized database abstraction layer.
 * Provides both sync (for UI compatibility) and async (for future-proofing) interfaces.
 * Currently uses localStorage as the persistence engine.
 */

const STORAGE = typeof window !== "undefined" ? window.localStorage : null;

/**
 * Persistence keys
 */
export const SESSION_KEYS = {
  currentUser: "crm_current_user",
} as const;

/**
 * Session storage (Always uses localStorage)
 */
export const session = {
  get<T>(key: string): T | null {
    if (!STORAGE) return null;
    try {
      const val = STORAGE.getItem(key);
      return val ? JSON.parse(val) as T : null;
    } catch { return null; }
  },
  set<T>(key: string, data: T): void {
    if (!STORAGE) return;
    STORAGE.setItem(key, JSON.stringify(data));
  },
  remove(key: string): void {
    if (!STORAGE) return;
    STORAGE.removeItem(key);
  }
};

/**
 * Application Database (Wraps storage, ready for async migration)
 */
export const db = {
  /**
   * Get an item from the database (Async).
   */
  async get<T>(key: string, defaultValue: T | null = null): Promise<T | null> {
    return this.getSync(key, defaultValue);
  },

  /**
   * Get an item from the database (Sync).
   */
  getSync<T>(key: string, defaultValue: T | null = null): T | null {
    if (!STORAGE) return defaultValue;
    try {
      const value = STORAGE.getItem(key);
      if (value === null) {
        if (defaultValue !== null) {
          this.saveSync(key, defaultValue);
        }
        return defaultValue;
      }
      return JSON.parse(value) as T;
    } catch (error) {
      console.error(`DB Error (get ${key}):`, error);
      return defaultValue;
    }
  },

  /**
   * Save an item to the database (Async).
   */
  async save<T>(key: string, data: T): Promise<void> {
    this.saveSync(key, data);
  },

  /**
   * Save an item to the database (Sync).
   */
  saveSync<T>(key: string, data: T): void {
    if (!STORAGE) return;
    try {
      STORAGE.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error(`DB Error (save ${key}):`, error);
      throw error;
    }
  },

  /**
   * Remove an item from the database (Async).
   */
  async remove(key: string): Promise<void> {
    this.removeSync(key);
  },

  /**
   * Remove an item from the database (Sync).
   */
  removeSync(key: string): void {
    if (!STORAGE) return;
    try {
      STORAGE.removeItem(key);
    } catch (error) {
      console.error(`DB Error (remove ${key}):`, error);
      throw error;
    }
  },

  /**
   * Clear all items from the database except for login session keys.
   */
  async clear(): Promise<void> {
    if (!STORAGE) return;
    try {
      const keysToRemove: string[] = [];
      const preserved = Object.values(SESSION_KEYS);
      for (let i = 0; i < STORAGE.length; i++) {
        const key = STORAGE.key(i);
        if (key && !preserved.includes(key as any)) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach((key) => STORAGE.removeItem(key));
    } catch (error) {
      console.error(`DB Error (clear):`, error);
      throw error;
    }
  },
};
