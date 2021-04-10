import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-logoff",
  templateUrl: "./nav-logoff.component.html",
  styleUrls: ["./nav-logoff.component.css"],
})
export class NavLogoffComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(["/login"]);
  }
}
