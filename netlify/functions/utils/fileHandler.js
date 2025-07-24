const fs = require('fs').promises;
const path = require('path');

class FileHandler {
  static async readJsonFile(filePath) {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      }
      throw error;
    }
  }

  static async writeJsonFile(filePath, data) {
    try {
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
      throw error;
    }
  }

  static generateId() {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  }

  static getCurrentTimestamp() {
    return new Date().toISOString();
  }
}

module.exports = FileHandler; 