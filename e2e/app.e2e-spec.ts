import { Abaga129GithubIOPage } from './app.po';

describe('abaga129-github-io App', function() {
  let page: Abaga129GithubIOPage;

  beforeEach(() => {
    page = new Abaga129GithubIOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
