import { Ng2ObjectPage } from './app.po';

describe('ng2-object App', () => {
  let page: Ng2ObjectPage;

  beforeEach(() => {
    page = new Ng2ObjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
