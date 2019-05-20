{{dashCase name}}
=============


Using This Module
-----------------

   const obsidian = require("@obsidianjs/obsidian");
   const {{camelCase name}} = require("{{dashCase name}}");

   const app = obsidian("my-application");
   app.use({{camelCase name}});
   app.start();

Finally require it in modules that need it::

   {
       name: "my-module",
       requires: ["{{dashCase name}}"],

       load(app) {
           const {{{pascalCase name}}} = app.modules;
           // ...
       },

       // ...

   }


Module API
----------

.. js:autoclass:: modules/src/{{dashCase name}}.{{pascalCase name}}
   :members:
   :short-name:
