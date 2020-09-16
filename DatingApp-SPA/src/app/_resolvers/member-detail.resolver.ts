import {Injectable} from '@angular/core';
import {UserService} from './../_service/user.service';
import {Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';
import {AlertifyService} from './../_service/alertify.service';
import {catchError} from 'rxjs/operators';

import { User } from '../_models/User';
import { of } from 'rxjs';

@Injectable(
    { providedIn: 'root'}
)

export class MemberDetailResolver implements Resolve<User>{


    constructor(private userService: UserService, private alertify: AlertifyService, private router: Router ){}

    resolve(route: ActivatedRouteSnapshot){


        return this.userService.getUser(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem recieving data');
                this.router.navigate(['/members']);
                return of(null);

            })
        )
    }



}
