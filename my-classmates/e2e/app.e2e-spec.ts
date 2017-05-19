import { FinalExamPage } from './app.po';

describe('final-exam App', function() {
  let page: FinalExamPage;

  beforeEach(() => {
    page = new FinalExamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
