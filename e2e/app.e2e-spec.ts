import { HerbTrackerPage } from './app.po';

describe('herb-tracker App', () => {
  let page: HerbTrackerPage;

  beforeEach(() => {
    page = new HerbTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
