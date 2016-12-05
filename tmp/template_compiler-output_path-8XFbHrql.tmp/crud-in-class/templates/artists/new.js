export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@2.8.2",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 13,
          "column": 0
        }
      },
      "moduleName": "crud-in-class/templates/artists/new.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("form");
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  Name: ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("br");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"type","submit");
      dom.setAttribute(el2,"class","btn btn-primary");
      var el3 = dom.createTextNode("Create Artist");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n\n\n\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [3]);
      var morphs = new Array(3);
      morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
      morphs[1] = dom.createAttrMorph(element0, 'onsubmit');
      morphs[2] = dom.createMorphAt(element0,3,3);
      return morphs;
    },
    statements: [
      ["content","outlet",["loc",[null,[3,0],[3,10]]],0,0,0,0],
      ["attribute","onsubmit",["subexpr","action",["createArtist"],[],["loc",[null,[null,null],[5,40]]],0,0],0,0,0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","artistName",["loc",[null,[7,34],[7,44]]],0,0,0,0]],[],[],0,0]],["loc",[null,[7,8],[7,46]]],0,0]
    ],
    locals: [],
    templates: []
  };
}()));