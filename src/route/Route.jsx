import { Children } from 'react';
import AdminLayout from '../layout/Admin';
import Home from '../pages/admin/Home';
import Agents from '../pages/admin/Agents';
import Leads from '../pages/admin/Leads';
import Customization from '../pages/admin/Customization';
import Policy from '../pages/admin/Policy';
import Settings from '../pages/admin/Settings';
import Login from '../auth/Login';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const adminroute = [
    {
        path : '/admin',
        element : <AdminLayout/>,
        children : [
            {
                path : '',
                element : <Home/>
            },
            {
                path : 'home',
                element : <Home/>
            },
            {
                path : 'agents',
                element : <Agents/>
            },
            {
                path : 'leads',
                element : <Leads/>
            },
            {
                path : 'customization',
                element : <Customization/>
            },
            {
                path : 'policy',
                element : <Policy/>
            },
            {
                path : 'settings',
                element : <Settings/>
            },
        ]
    }
]



export default function Routing(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    {
                    adminroute.map((route,index)=>(
                        <Route key={index} path={route.path} element={route.element}>
                            {
                                route.children.map((child,i)=>(
                                    <Route key={i} path={child.path} element={child.element} ></Route>
                                ))
                            }
                        </Route>
                    ))
                }
                </Routes>
            </Router>
        </>
    )
}