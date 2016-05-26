export class MauMauPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mau-mau-app h1')).getText();
  }
}
