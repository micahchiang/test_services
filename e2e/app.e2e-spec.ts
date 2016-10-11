import { TestServicesPage } from './app.po';

describe('test-services App', function() {
  let page: TestServicesPage;

  beforeEach(() => {
    page = new TestServicesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
