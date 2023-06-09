import React from 'react';
import {  useLocation,useNavigate,useParams } from 'react-router-dom';

export default function withRouter(Component) {
    function ComponentWithRouterProp(props){
    const location= useLocation()
    const navigate=useNavigate()
    const params= useParams()
        return <Component {...props} routers={{location,navigate, params }} />

    }

    return ComponentWithRouterProp;
}
