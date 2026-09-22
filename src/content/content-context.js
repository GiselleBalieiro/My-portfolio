import { createContext, useContext } from 'react';
import { defaultContent } from './defaults';

export const ContentContext = createContext({
  content: defaultContent,
  loading: false,
  refresh: () => {},
});

export function useContent() {
  return useContext(ContentContext);
}
