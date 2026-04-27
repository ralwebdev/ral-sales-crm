/**
 * Centralized database abstraction layer.
 * Provides both sync (for UI compatibility) and async (for future-proofing) interfaces.
 * Currently uses localStorage as the persistence engine.
 */

const STORAGE = typeof window !== "undefined" ? window.localStorage : null;

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
   * Clear all items from the database except for specific preserved keys.
   */
  async clear(preservedKeys: string[] = ["crm_current_user"]): Promise<void> {
    if (!STORAGE) return;
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < STORAGE.length; i++) {
        const key = STORAGE.key(i);
        if (key && !preservedKeys.includes(key)) {
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
