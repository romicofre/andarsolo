import './Menu.css'
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";


function  MainMenu(){
  return(

    <BottomNavigation
      showLabels
    >
      <BottomNavigationAction label="Apps"  />
      <BottomNavigationAction label="Viajes"  />
      <BottomNavigationAction label="Comida" />
    </BottomNavigation>
  )
}

export default MainMenu;