describe('jQuery Order Of Operations', function() {
  it('calls the GitHub API commits url', function() {
    spyOn($, "getJSON");
    showJsLove();
    expect($.getJSON.calls.argsFor(0)[0]).toEqual('https://api.github.com/repos/rails/rails/commits');
  });

  it('logs "I Love JavaScript" using console.log', function() {
    spyOn($, "getJSON").and.callFake(function(url, success) {
      success({});
    });

    setTimeout(function(){
      expect(console.log.calls.allArgs()).toEqual([["I"],["Love"],[ "JavaScript"]]);
    }, 2000);
  });
});
