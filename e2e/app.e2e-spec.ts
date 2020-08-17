import { Angular8FarmhouserPage } from './app.po';

describe('angular8-farmhouser App', () => {
  let page: Angular8FarmhouserPage;

  beforeEach(() => {
    page = new Angular8FarmhouserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
