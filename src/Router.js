import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 0 }} >
      <Scene key="root" hideNavBar hideTabBar> 
        <Scene key="auth">
          <Scene
           key="login"
           component={LoginForm} 
           title="Please Login" 
           titleStyle={{ alignSelf: 'center' }} 
          />          
        </Scene>
 
        <Scene key="main">
          <Scene
           onRight={() => Actions.employeeCreate()}
           rightTitle=" Add"
           key="employeeList" 
           component={EmployeeList} 
           title="Employees" 
           titleStyle={{ alignSelf: 'center' }}
           initial 
          />
          <Scene
           key="employeeCreate" 
           component={EmployeeCreate} 
           title="Create Employee"
           titleStyle={{ alignSelf: 'center' }} 
          />
          <Scene
           key="employeeEdit"
           component={EmployeeEdit}
           title="Edit Employee"
           titleStyle={{ alignSelf: 'center' }}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
