type StorageType = 'local' | 'cookie';

class Storage {
  private readonly storageHandler: {
    set: (key: string, value: string) => void;
    get: (key: string) => string | null;
    remove: (key: string) => void;
  };

  constructor(type: StorageType = 'local') {
    this.storageHandler = this.initStorageHandler(type);
  }

  private initStorageHandler(type: StorageType) {
    if (type === 'local') {
      return {
        set: (key: string, value: string) => localStorage.setItem(key, value),
        get: (key: string) => localStorage.getItem(key),
        remove: (key: string) => localStorage.removeItem(key),
      };
    }
    if (type === 'cookie') {
      return {
        set: (key: string, value: string) => {
          document.cookie = `${key}=${value}; path=/;`;
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
    }
    throw new Error('Invalid storage type');
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
