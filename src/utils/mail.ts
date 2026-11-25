import MailListener from '@utils/mailListener';

/**
 * @module MailDevHelper
 * @description Helper to wrap Maildev functions
 */
export default {

  /**
   * Create a Maildev server instance (the default smtp port is 1026)
   * @param config {{smtpPort: string, smtpServer: string, silent:boolean}} Maildev config to start listening
   * @returns {Object}
   */
  createMailListener(config = global.maildevConfig): MailListener {
    return new MailListener({
      web: 1081,
      smtp: config.smtpPort,
      silent: config.silent,
    });
  },
  /**
   * Start the maildev listener (listen on 1026 smtp port)
   * @param mailListener {MailListener} Maildev server instance
   */
  startListener(mailListener: MailListener): void {
    mailListener.listen((err: Error | null): void => {
      if (err) {
        throw err;
      }
    });
  },
  /**
   * Stop the maildev listener
   * @param mailListener {MailListener} Maildev server instance
   */
  stopListener(mailListener: MailListener): void {
    mailListener.close((err: Error | null): void => {
      if (err) {
        throw err;
      }
    });
  },
};
