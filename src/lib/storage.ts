type IStorageType = 'local' | 'cookie';

interface IStorageHandler {
  set: (key: string, value: string) => void;
  get: (key: string) => string | null;
  remove: (key: string) => void;
}

const LocalStorageHandler: IStorageHandler = {
  set: (key: string, value: string) => localStorage.setItem(key, value),
  get: (key: string) => localStorage.getItem(key),
  remove: (key: string) => localStorage.removeItem(key),
};

const CookieStorageHandler: IStorageHandler = {
  set: (key: string, value: string) => {
    document.cookie = `${key}=${value}; path=/; HTTPOnly; Secure; SameSite=strict`;
  },
  get: (key: string) => {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${key}=`)) {
        return cookie.substring(key.length + 1);
      }
    }
    return null;
  },
  remove: (key: string) => {
    document.cookie = `${key}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  },
};

class Storage {
  private readonly storageHandler: IStorageHandler;

  constructor(type: IStorageType = 'local') {
    this.storageHandler = this.getStorageHandler(type);
  }

  private getStorageHandler(type: IStorageType) {
    switch (type) {
      case 'local':
        return LocalStorageHandler;
      case 'cookie':
        return CookieStorageHandler;
      default:
        throw new Error('Invalid storage type');
    }
  }

  set(key: string, value: string) {
    this.storageHandler.set(key, value);
  }

  get(key: string): string | null {
    return this.storageHandler.get(key);
  }

  remove(key: string) {
    this.storageHandler.remove(key);
  }
}

export const StorageResolver = new Storage('local');
