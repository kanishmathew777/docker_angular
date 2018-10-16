import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messages = [{
    "text": "Hi, how are you",
    "self": false 
  },{
    "text": "I am fine",
    "self": true
  }]

  constructor() { }

  ngOnInit() {
  }

}
