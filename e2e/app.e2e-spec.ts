import { BoeingPicnicFormTDPage } from './app.po';

describe('boeing-picnic-form-td App', () => {
  let page: BoeingPicnicFormTDPage;

  beforeEach(() => {
    page = new BoeingPicnicFormTDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
