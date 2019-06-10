import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('buttonState', [
      state('invisible', style({
        opacity: 1
      })),
      state('visible', style({
        opacity: 1
      })),
      transition('invisible <=> visible', animate(800))
    ])
  ]
})
export class MainComponent implements OnInit {

  message = '';
  messageInput =
    'Hello, I\'m happy to have you here.';
  messageTwoInput = ' My name is Jakub and I do stuff.';
  messageTwo = '';
  state = 'invisible';

  ngOnInit(): void {
    this.generateFirstMessage();
  }

  onAnimate() {
    this.state = 'visible';
  }

  generateFirstMessage() {
    let charIndex = 0;
    const intervalTyping = setInterval(() => {
      if (charIndex > this.messageInput.length) {
        clearInterval(intervalTyping);
        setTimeout(() => {
          this.generateSecondMessage();
        }, 200);
      } else {
        this.message = this.message.concat(this.messageInput.charAt(charIndex));
        charIndex++;
      }
    }, 50);

  }

  cleanMessage() {
    let messageLength = this.message.length;
    const intervalCleaner = setInterval(() => {
      if (messageLength < 0) {
        clearTimeout(intervalCleaner);
      } else {
        this.message = this.message.substr(0, messageLength);
        messageLength--;
      }
    }, 50);
  }

  private generateSecondMessage() {
    let charIndex = 0;
    const intervalTyping = setInterval(() => {
      if (charIndex > this.messageTwoInput.length) {
        clearInterval(intervalTyping);
        setTimeout(() => {
          this.onAnimate();
        }, 200);
      } else {
        this.messageTwo = this.messageTwo.concat(this.messageTwoInput.charAt(charIndex));
        charIndex++;
      }
    }, 50);
  }
}
