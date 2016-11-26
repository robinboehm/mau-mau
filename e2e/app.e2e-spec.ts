import { MauMauPage } from './app.po';

describe('mau-mau App', function() {
  let page: MauMauPage;

  beforeEach(() => {
    page = new MauMauPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
