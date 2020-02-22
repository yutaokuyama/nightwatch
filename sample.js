module.exports  = {
  'Test' : function(browser){
    const ecosia = browser.page.ecosia();

    ecosia.navigate()
      .assert.titleContains('Ecosia')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'hoge')
      .click('button[type="submit"]')
      .end();
  }
}