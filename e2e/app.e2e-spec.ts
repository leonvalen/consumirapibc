import { ConsumirapibcPage } from './app.po';

describe('consumirapibc App', () => {
  let page: ConsumirapibcPage;

  beforeEach(() => {
    page = new ConsumirapibcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
