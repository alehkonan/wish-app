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
    key: string;
    value: Sphere;
  };
  wishes: {
    key: string;
    value: Wish;
  };
}

const createWishDb = () =>
  openDB<IdbSchema>('wish-db', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('spheres')) {
        db.createObjectStore('spheres', {
          keyPath: 'id',
        });
      }
      if (!db.objectStoreNames.contains('wishes')) {
        db.createObjectStore('wishes', {
          keyPath: 'id',
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
