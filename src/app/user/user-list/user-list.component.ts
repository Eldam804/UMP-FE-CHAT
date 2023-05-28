import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../common/service/user.service";
import {GlobalChatService} from "../../common/service/global-chat.service";
import {T} from "@angular/cdk/keycodes";
import {group} from "@angular/animations";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  displayedColumns: Array<String> = ['picture', 'username', 'displayedColumns'];
  displayedColumnsGroup: Array<String> = ['picture', 'groupName', 'displayedColumns'];
  displayedColumnsInvites: Array<String> = ['picture', 'groupName', 'displayedColumns','actions'];
  dataSource: Array<any> = [];
  currentUser: any = "";
  dataSource2: Array<any> = [];
  dataSource3: Array<any> = [];

  constructor(private userService: UserService, private router: Router, private service: GlobalChatService) {
    this.getUserId();
    this.getAllUsers();
  }

  onButtonClick(userId: number, username: string) {
    this.userService.setForeignUserId(userId.toString());
    this.userService.setForeignUsername(username);
    this.router.navigate(["private-chat"])
  }

  private getAllUsers() {
    this.userService.getAllUsers().subscribe((users: any) => {
      this.dataSource = users;
    })
  }

  private async getUserId() {
    await this.service.getUserId().subscribe((user: any) => {
      this.currentUser = {
        userId: user.id,
        username: user.username
      }
      this.userService.getAllGroups(this.currentUser.userId).subscribe((groups: any) => {
        this.dataSource2 = groups;
      })
      this.userService.getAllGroupInvite(this.currentUser.userId).subscribe((groupInvite: any)=>{
        this.dataSource3 = groupInvite;
      })
    })
    console.log("CURRENT USER ID: ", this.currentUser);
  }


  accept(groupId: number) {
    const invite = {
      groupId: groupId,
      userId: this.currentUser.userId
    };

    this.userService.acceptInvite(invite).subscribe(() => {
      this.getUserId();
    });
  }

  delete(groupId: number) {
    this.userService.deleteInvite(groupId, this.currentUser.userId).subscribe(()=>{
      this.getUserId();
    })
  }

}



