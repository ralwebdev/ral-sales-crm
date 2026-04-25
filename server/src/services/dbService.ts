import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(__dirname, '../models/db.json');

export interface Database {
  users: any[];
  leads: any[];
  campaigns: any[];
  invoices: any[];
  payments: any[];
  followUps: any[];
}

const initialDb: Database = {
  users: [
    { id: "u1", name: "Amit Sharma", email: "amit@redapple.com", password: "admin123", role: "admin" },
    { id: "u2", name: "Soumya Saha", email: "soumya@redapple.com", password: "marketing123", role: "marketing_manager" }
  ],
  leads: [],
  campaigns: [],
  invoices: [],
  payments: [],
  followUps: []
};

export class DbService {
  private db: Database;

  constructor() {
    if (!fs.existsSync(DB_PATH)) {
      fs.writeFileSync(DB_PATH, JSON.stringify(initialDb, null, 2));
      this.db = initialDb;
    } else {
      this.db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
    }
  }

  getDb() {
    return this.db;
  }

  save() {
    fs.writeFileSync(DB_PATH, JSON.stringify(this.db, null, 2));
  }

  // Generic helpers
  getAll(collection: keyof Database) {
    return this.db[collection];
  }

  getById(collection: keyof Database, id: string) {
    return (this.db[collection] as any[]).find(item => item.id === id);
  }

  add(collection: keyof Database, item: any) {
    (this.db[collection] as any[]).push(item);
    this.save();
    return item;
  }

  update(collection: keyof Database, id: string, patch: any) {
    const index = (this.db[collection] as any[]).findIndex(item => item.id === id);
    if (index !== -1) {
      this.db[collection][index] = { ...this.db[collection][index], ...patch };
      this.save();
      return this.db[collection][index];
    }
    return null;
  }
}

export const dbService = new DbService();
