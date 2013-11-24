describe('Test showcase', function() {
 
  describe('ProfileCtrl', function(){
 
    it('should instantiate "users" model with 2 users', function() {
      var scope = {};
      var ctrl = new ProfileCtrl(scope);
 
      expect(scope.users.length).toBe(2);
    });
  });
});