const NavPageObject = require('../framework/page-objects/NavPageObject');

describe('page layout and browser size tests', function() {
  var navPage;

  beforeEach(function() {
    browser.ignoreSynchronization = true;
    navPage = new NavPageObject();
  });

  it('has DOCUMENTATION visible at large sizes', function() {
    navPage.setWindowSize(1060, 640);
    expect(navPage.getDocumentationText()).toEqual("DOCUMENTATION");
  });

  it('does not have DOCUMENTATION visible at small sizes', function() {
   navPage.setWindowSize(360, 640);
    
   expect(navPage.getDocumentationText()).toEqual("");
  });
  
  it('does not have mobile navigation visible at large sizes', function() {
    // FIXME: Abstract this into a "Run this test on desktop" function.
    //        Take sizes from the CSS that we use to define sizes.
    navPage.setWindowSize(1060, 640);
    
    expect(navPage.getMobileNavHeight()).toEqual(0);
    expect(navPage.getMobileNavWidth()).toEqual(0);
  });
  
  it('has mobile navigation visible at small sizes', function() {
    navPage.setWindowSize(360, 640);
    
    expect(navPage.getMobileNavHeight()).toBeGreaterThan(0);
    expect(navPage.getMobileNavWidth()).toBeGreaterThan(0);
  });
  
});
