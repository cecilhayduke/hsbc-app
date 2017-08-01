import { HsbcAppPage } from './app.po';

describe('hsbc-app App', () => {
  let page: HsbcAppPage;

  beforeEach(() => {
    page = new HsbcAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
