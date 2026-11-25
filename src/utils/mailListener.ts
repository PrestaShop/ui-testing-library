import {EventEmitter} from 'node:events';
import type MailDevEmail from '@data/types/maildevEmail';
import type {MailDev as MailDevServer, PartialMailDevConfig, Servers} from 'maildev';

type MailDevModule = typeof import('maildev');

type ReceivedEmail = Awaited<ReturnType<Servers['storage']['getAll']>>[number];

// maildev 3 is ESM-only and exports no `require` condition, and TypeScript rewrites `import()` into `require()`
// when emitting CommonJS: the Function body keeps a native `import()`.
// eslint-disable-next-line @typescript-eslint/no-implied-eval, no-new-func
const importMailDev = new Function('return import("maildev")') as () => Promise<MailDevModule>;

/**
 * Callback-based wrapper around the promise-based MailDev 3 server, keeping the MailDev 2 API used by campaigns
 */
export default class MailListener {
  private readonly config: PartialMailDevConfig;

  private readonly emails: MailDevEmail[] = [];

  private readonly emitter: EventEmitter = new EventEmitter();

  private server: MailDevServer | null = null;

  private servers: Promise<Servers> | null = null;

  constructor(config: PartialMailDevConfig) {
    this.config = config;
  }

  listen(callback?: (error: Error | null) => void): void {
    this.servers = importMailDev()
      .then(async ({MailDev}): Promise<Servers> => {
        this.server = new MailDev(this.config);

        const servers = await this.server.start();
        servers.smtp.on('new', (email: ReceivedEmail) => {
          const mail = MailListener.toMailDevEmail(email);
          this.emails.push(mail);
          this.emitter.emit('new', mail);
        });

        return servers;
      });
    this.servers.then(() => callback?.(null), (error: Error) => callback?.(error));
  }

  close(callback?: (error: Error | null) => void): void {
    this.getServers()
      .then(() => this.server!.stop())
      .then(() => callback?.(null), (error: Error) => callback?.(error));
  }

  on(eventName: 'new', callback: (email: MailDevEmail) => void): void {
    this.emitter.on(eventName, callback);
  }

  // MailDev 2 handed out its live store: campaigns keep the reference and read the emails received later
  getAllEmail(callback: (error: Error | null, emails: MailDevEmail[]) => void): void {
    this.getServers()
      .then(() => callback(null, this.emails), (error: Error) => callback(error, []));
  }

  // MailDev 3 omits `text` on HTML-only emails, campaigns read it as a string
  private static toMailDevEmail(email: ReceivedEmail): MailDevEmail {
    return {...email, text: email.text ?? ''};
  }

  private getServers(): Promise<Servers> {
    if (this.servers === null) {
      return Promise.reject(new Error('The mail listener is not started, call listen() first'));
    }

    return this.servers;
  }
}
