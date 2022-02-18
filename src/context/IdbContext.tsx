import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { DBSchema, IDBPDatabase, openDB } from 'idb';
import { Sphere, Wish } from '../types';

interface IdbSchema extends DBSchema {
  spheres: {
    key: number;
    value: Sphere;
    indexes: {
      'by-price': number;
    };
  };
  wishes: {
    key: number;
    value: Wish;
    indexes: {
      'by-price': number;
    };
  };
}

const createWishDb = () =>
  openDB<IdbSchema>('wish-db', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('spheres')) {
        db.createObjectStore('spheres', {
          autoIncrement: true,
        });
      }
      if (!db.objectStoreNames.contains('wishes')) {
        db.createObjectStore('wishes', {
          autoIncrement: true,
        });
      }
    },
  });

const Idb = createContext<IDBPDatabase<IdbSchema> | null>(null);

export const IdbProvider = ({ children }: { children: ReactElement }) => {
  const [db, setDb] = useState<IDBPDatabase<IdbSchema> | null>(null);

  useEffect(() => {
    createWishDb().then((wishDb) => setDb(wishDb));
  }, []);

  return <Idb.Provider value={db}>{children}</Idb.Provider>;
};

export const useIdb = () => useContext(Idb);
