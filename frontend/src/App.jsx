import AppProvider from '@/providers/AppProvider';
import PageRouter from '@/routers/pageRouter/PageRouter';
import Layout from '@/layout/Layout';

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <PageRouter />
      </Layout>
    </AppProvider>
  );
};

export default App;
