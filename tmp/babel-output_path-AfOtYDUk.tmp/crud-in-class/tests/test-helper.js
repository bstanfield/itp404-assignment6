define('crud-in-class/tests/test-helper', ['exports', 'crud-in-class/tests/helpers/resolver', 'ember-qunit'], function (exports, _crudInClassTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_crudInClassTestsHelpersResolver['default']);
});