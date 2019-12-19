import { catchError } from "rxjs/operators";
import { AlertifyService } from "src/app/_services/alertify.service";
import { UserService } from "src/app/_services/user.service";
import { Injectable } from "@angular/core";
import {
  Resolve,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { User } from "../_models/user";
import { Observable, of } from "rxjs";
import { AuthService } from "../_services/auth.service";

@Injectable()
export class MemberEditResolver implements Resolve<User> {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertifyService: AlertifyService,
    private authService: AuthService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError(error => {
        this.alertifyService.error("Problem retrieving data");
        this.router.navigate(["/members"]);
        return of(null);
      })
    );
  }
}
