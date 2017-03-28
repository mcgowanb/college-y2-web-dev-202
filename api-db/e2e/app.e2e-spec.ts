import { ApiDbPage } from './app.po';

describe('api-db App', function() {
  let page: ApiDbPage;

  beforeEach(() => {
    page = new ApiDbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
