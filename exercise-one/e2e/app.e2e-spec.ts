import { StudentDetailsPage } from './app.po';

describe('student-details App', function() {
  let page: StudentDetailsPage;

  beforeEach(() => {
    page = new StudentDetailsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
