import { SheterWebAppPage } from './app.po';

describe('sheter-web-app App', () => {
  let page: SheterWebAppPage;

  beforeEach(() => {
    page = new SheterWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
