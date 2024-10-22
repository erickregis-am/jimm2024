import { Ionicons } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';

export default function TabLayout() {
  return (
     <Tabs screenOptions={{
        tabBarActiveTintColor: '#62a8f2',

        headerTitle: '2EMAA | VIII - JIMM | FEIRA CULTURAL',
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle:{
          color: '#FFFFFF',
          fontSize: 18,
          letterSpacing: 2
        },
        headerStyle: {
          backgroundColor: '#014ea2',
          borderBottomRightRadius: 8,
          borderBottomLeftRadius: 8,
          height: 75,
        },

        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#003063',
          borderTopWidth: 0,
          bottom: 14,
          left: 14,
          right: 14,
          elevation: 0,
          borderRadius: 8,
        },
     }}>
      <Tabs.Screen name='Home' options={{
        

        tabBarIcon: ({color, size, focused}) => {
          if(focused){
            return <Ionicons name='home' size={size} color={color}></Ionicons>
          }

          return <Ionicons name='home-outline' size={size} color={color}></Ionicons>
        },

        title: 'Tela inicial',
      }}></Tabs.Screen>
      <Tabs.Screen name='Sobre' options={{

        tabBarIcon: ({color, size, focused}) => {
          if(focused){
            return <Ionicons name='information-circle' size={size} color={color}></Ionicons>;
          } 

          return <Ionicons name='information-circle-outline' size={size} color={color}></Ionicons>
        
        },
      }}></Tabs.Screen>
       <Tabs.Screen name='Modalidades' options={{
    
        tabBarIcon: ({color, size, focused}) => {
          if(focused){
            return <Ionicons name='albums' size={size} color={color}></Ionicons>
          }

          return <Ionicons name='albums-outline' size={size} color={color}></Ionicons>
        },

       }}></Tabs.Screen>
       <Tabs.Screen name='Olimpiadas' options={{
     
        tabBarIcon: ({color, size, focused}) => {
          if(focused){
            
            return <Ionicons name='medal' size={size} color={color}></Ionicons>
          }

          return <Ionicons name='medal-outline' size={size} color={color}></Ionicons>
        },

        title: 'Olimpíadas',
       }}></Tabs.Screen>
     </Tabs>
  );
}
