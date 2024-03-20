import 'react-native-gesture-handler';

import {ThemeContextProvider} from './presentation/context/ThemeContext';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};

export default App;
