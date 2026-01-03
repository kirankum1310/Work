//Rule Book

abstract class Notifier {
  abstract send(message: string): void;
}

class EmailNotifier extends Notifier {
  send(message: string): void {
    console.log(`📧 Email sent: ${message}`);
  }
}

class SMSNotifier extends Notifier {
  send(message: string): void {
    console.log(`📱 SMS sent: ${message}`);
  }
}

class PushNotifier extends Notifier {
  send(message: string): void {
    console.log(`📲 Push Notification: ${message}`);
  }
}

function sendAlert(notifier: Notifier, message: string) {
  notifier.send(message);
}

// All objects behave differently for the same method call

const notifiers: Notifier[] = [
  new EmailNotifier(),
  new SMSNotifier(),
  new PushNotifier()
];

for (const n of notifiers) {
  sendAlert(n, "System Update Available!");
}
