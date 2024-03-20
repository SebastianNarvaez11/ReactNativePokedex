import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {PokemonScreen} from '../screens/pokemon/PokemonScreen';
import {SearchScreen} from '../screens/search/SearchScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  PokemonScreen: {pokemonId: string};
  SearchScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PokemonScreen"
        component={PokemonScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
