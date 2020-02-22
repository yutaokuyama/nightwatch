module.exports  = {
  'Test' : function(browser){
    let google = browser.page.google();

    google.navigate()
      .assert.titleContains('Ecosia')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'hoge')
      .click('button[type="submit"]')
      .end();
  }
}