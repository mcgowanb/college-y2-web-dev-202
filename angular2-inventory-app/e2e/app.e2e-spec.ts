import { Angular2InventoryAppPage } from './app.po';

describe('angular2-inventory-app App', function() {
  let page: Angular2InventoryAppPage;

  beforeEach(() => {
    page = new Angular2InventoryAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
