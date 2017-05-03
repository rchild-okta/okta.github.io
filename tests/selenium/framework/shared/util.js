var EC = protractor.ExpectedConditions;
var util = module.exports = {};

util.wait = function (elementFinder) {
  return browser.wait(EC.presenceOf(elementFinder));
};

util.waitVisible = function (elementFinder) {
  return browser.wait(EC.visibilityOf(elementFinder));
};

util.waitInvisible = function (elementFinder) {
  return browser.wait(EC.invisibilityOf(elementFinder));
};

util.presenceOfIndex = function (elementsFinder, index) {
  return function () {
    return elementsFinder.count().then(function (count) {
      return count >= (index + 1);
    });
  };
};

util.presenceOfAll = function (elementsFinder, expectedCount) {
  return function () {
    return elementsFinder.count().then(function (count) {
      return count === expectedCount;
    });
  };
};

util.waitForIndex = function (elementsFinder, index) {
  return browser.wait(util.presenceOfIndex(elementsFinder, index));
};

util.waitForAll = function (elementsFinder, count) {
  return browser.wait(util.presenceOfAll(elementsFinder, count));
};

util.formatUrl = function (url, hideNav) {
  return url + (hideNav ? '?hideNav=true' : '');
};

util.EC = EC;