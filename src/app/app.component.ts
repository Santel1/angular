import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'interview';
  // Message from parent component
  messageFromParent = 'Hello from parent component';

  // Message from child component
  messageFromChild = '';

  getMessageFromChild(message: string) {
    this.messageFromChild = message;
  }
}
