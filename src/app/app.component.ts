import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // ADD PROVIDERS
  // providers: [AccountsService]
})
export class AppComponent implements OnInit {
  // DEFINE ACCOUNTS ARRAY AND SET IT TO EMPTY INITIALLY
  accounts: {name:string, status:string}[] = [];

  // INJECT SERVICE:
  constructor(private accountsService: AccountsService){}

  // SET CLASS VARIABLES TO SERICE VARIABLES
  ngOnInit(){
    this.accounts = this.accountsService.accounts
  }

}
