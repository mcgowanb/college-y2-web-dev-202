import { JustHealthPage } from './app.po';

describe('just-health App', function() {
  let page: JustHealthPage;

  beforeEach(() => {
    page = new JustHealthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
