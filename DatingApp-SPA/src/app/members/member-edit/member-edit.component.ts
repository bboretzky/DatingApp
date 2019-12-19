import { AuthService } from "./../../_services/auth.service";
import { UserService } from "src/app/_services/user.service";
import { AlertifyService } from "src/app/_services/alertify.service";
import { ActivatedRoute } from "@angular/router";
import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { User } from "src/app/_models/user";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-member-edit",
  templateUrl: "./member-edit.component.html",
  styleUrls: ["./member-edit.component.css"]
})
export class MemberEditComponent implements OnInit {
  @ViewChild("editForm", { static: true }) editForm: NgForm;
  user: User;

  @HostListener("window:beforeunload", ["$event"])
  unloadNotification($event: any) {
    if (this.editForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private route: ActivatedRoute,
    private alertifyService: AlertifyService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data["user"];
    });
  }

  updateUser() {
    this.userService
      .upateUser(this.authService.decodedToken.nameid, this.user)
      .subscribe(
        next => {
          this.alertifyService.success("Profile updated successfully.");
          this.editForm.reset(this.user);
        },
        error => {
          this.alertifyService.error(error);
        }
      );
  }
}
