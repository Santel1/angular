import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  //* Property interpolation
  title = 'interview';
  firstName = 'John';
  lastName = 'Doe';
  //*---------------------------------------------------------------------------------

  //* Property binding
  isEnable: boolean = true;
  isActivated: boolean = true;
  isDisabled: boolean = false;
  //*---------------------------------------------------------------------------------

  //* Template string (Interpolation)
  getFullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }
  //*---------------------------------------------------------------------------------

  //* Event binding
  onClick() {
    this.isActivated = !this.isActivated;
    this.isDisabled = !this.isDisabled;
  }
  //*---------------------------------------------------------------------------------

  //* Two-way data binding
  userName: string = '';
  //*---------------------------------------------------------------------------------

  //* Message from parent component
  @Input() childMessage: string = '';
  //*---------------------------------------------------------------------------------

  //* Message to parent component
  @Output() messageFromChild = new EventEmitter<string>();

  sendMessageToParent() {
    this.messageFromChild.emit('Hello from child component');
  }
  //*---------------------------------------------------------------------------------
}
