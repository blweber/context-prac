import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

import './breadcrumbs.scss';

const Breadcrumbs = (props) => {
    return ( 
        <div>
            <Breadcrumb>
                <BreadcrumbItem>Configuration</BreadcrumbItem>
                <BreadcrumbItem><a href="#">Manage Users</a></BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
}
 
export default Breadcrumbs;