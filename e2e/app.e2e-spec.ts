import { F0rmation.V2Page } from './app.po';

describe('f0rmation.v2 App', () => {
  let page: F0rmation.V2Page;

  beforeEach(() => {
    page = new F0rmation.V2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
