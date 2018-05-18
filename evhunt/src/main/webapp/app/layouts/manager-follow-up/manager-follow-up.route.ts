import {Route} from "@angular/router";
import {ManagerFupComponent} from "./manager-follow-up.component";

export const managerFupRoute: Route =
    {
        path: 'manager-fup',
        component: ManagerFupComponent,
        data: {
            authorities: [],
            pageTitle: 'error.title'
        },
    };
