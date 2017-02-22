import { LondonPage } from './app.po';

describe('london App', function() {
  let page: LondonPage;

  beforeEach(() => {
    page = new LondonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
