import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers lets Angular understand How we want to use a service
  // providers: [
  //   LoggingService,     // creates new instance of service in new-account component
  //   // AccountsService    //Remove from providers list so that individual instance isn't created and uses instance from app.component
  // ]
})
export class NewAccountComponent {
  // @Output() 
  accountAdded = new EventEmitter<{name: string, status: string}>();

  // 2) ASSIGN SERVICE IN CLASS CONSTRUCTOR
  // TELL ANGULAR 'WHAT' WE WANT AND HOW WE WANT IT (SEE 'providers' in component properties)
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService,
  ){
    //CREATE AN ALERT EVERYTIME STATUS UPDATED IS CALLED:
    this.accountService.statusUpdated.subscribe(
    (status: string)=>alert('New STatus: '+status)
    );
  }



  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus)
    // NO LONGER NEEDED BECAUSE WE CAN USE SERVICE TO 'EMIT' ACCOUNTS
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // 1) DO NOT USE SERVICE LIKE THIS IN ANGULAR
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus)

    // 3) NOW, USE AN INSTANCE OF THE SERVICE:
    this.loggingService.logStatusChange(accountStatus);

    
    
  }
}
