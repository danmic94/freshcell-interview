import { Client, cacheExchange, fetchExchange } from 'urql';

const URL = 'https://cms.trial-task.k8s.ext.fcse.io/graphql';

export const client = new Client({
  url: URL,
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    return {
      headers: { 
        authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
      },
    };
  },
});

