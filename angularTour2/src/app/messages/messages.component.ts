import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less']
})
export class MessagesComponent implements OnInit {

  // must be public because we're binding it to the template
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
