import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { ThisReceiver } from '@angular/compiler';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [
  //   LoggingService,     // creates new instance of service in new-account component
  //   // AccountsService    //Remove from providers list so that individual instance isn't created and uses instance from app.component
  // ]                 
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  // ASSIGN SERVICE IN CONSTRUCTOR SO ANGULAR RECOGNIZES AT INITIALIZATION
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ){}


  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus(this.id, status)
    // console.log('A server status changed, new status: ' + status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
