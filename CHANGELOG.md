# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.20](https://github.com/Ahmedtaheromar/Web-Me-backend/compare/v0.0.18...v0.0.20) (2022-11-09)


### Features

* **admin-microservice:** implement admin microservice application ([0201072](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/0201072e2bd53241af563f29e0cda07181ebbc1b))
* create internal controllers for meta, categories, templates ([518834b](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/518834ba9def4baf0823b449e3c5ecc5d1226f3d))


### Bug Fixes

* **admin-api:** fix the route of swager api ([2bb799a](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/2bb799a32771832e2a997279462a87d287f3faa0))

### [0.0.19](https://github.com/Ahmedtaheromar/Web-Me-backend/compare/v0.0.18...v0.0.19) (2022-11-09)


### Bug Fixes

* **admin-api:** fix the route of swager api ([2bb799a](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/2bb799a32771832e2a997279462a87d287f3faa0))

### [0.0.18](https://github.com/Ahmedtaheromar/Web-Me-backend/compare/v0.0.17...v0.0.18) (2022-11-06)


### Bug Fixes

* enhance pages path ([a9d1fa9](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/a9d1fa98f0cff89d705d7b45d7ecc5403a2f6819))

### [0.0.17](https://github.com/Ahmedtaheromar/Web-Me-backend/compare/v0.0.16...v0.0.17) (2022-11-04)


### Features

* **projects:** add categories relations to list ([f815876](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/f815876247948e23c1d3a8a6b04b3de29e827ea8))


### Bug Fixes

* enhance uploaded logo, screenshot path ([e61a9ad](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/e61a9addd8d1fb7ffade7e9b53bc9e36b2464004))
* **projects:** add validations to logo and screenshot ([879fecf](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/879fecfc05deb819054f205d49aecd7ae1a5ff0b))

### [0.0.16](https://github.com/Ahmedtaheromar/Web-Me-backend/compare/v0.0.15...v0.0.16) (2022-10-30)


### Features

* **templates:** let templates accept multi categories ([74360bb](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/74360bb6974c94cefedff4c87d8cb112c9fb23c3))

### [0.0.15](https://github.com/Ahmedtaheromar/Web-Me-backend/compare/v0.0.14...v0.0.15) (2022-10-30)


### Features

* **templates:** include screenshot and pages screenshot in list ([2a9c1df](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/2a9c1df03452328c644722af9c3849d50c9d475c))


### Bug Fixes

* **templates:** include screenshot field ([4c50879](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/4c50879150ca89f257b4c600675a1bc4df69af75))
* **templates:** remove user relation when creating template ([63f22a7](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/63f22a79701bd98a74a369c2a62f2040fdbb9084))

### [0.0.14](https://github.com/Ahmedtaheromar/Web-Me-backend/compare/v0.0.13...v0.0.14) (2022-10-29)


### Features

* **pages:** change page creation to form-data ([8c1ebd5](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/8c1ebd565084427a492bff6bbf026af81e1834ee))
* **projects:** upload logo during the project creation API, save logo as media object ([8841305](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/8841305cd620a397d24cc22efbf2aca623e29ae4))

### [0.0.13](https://github.com/Ahmedtaheromar/Web-Me-backend/compare/v0.0.12...v0.0.13) (2022-10-28)


### Features

* get meta by key API, secure all modules ([737b9cb](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/737b9cba4e2f0fec2daad722e1509720499c8156))
* include categories, enhance profile APIs in swagger ([35a391f](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/35a391febda813061f4fd8104306866df070b206))
* **meta-feature:** implement meta feature that stores all settings ([12a1986](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/12a1986ee6039906f1de74ea38da43af989540e2))
* **templates:** implement CRUD for categories and add template logic to projects endpoints ([34968d3](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/34968d3d6defb9b21aa4d55542a8da3528b27770))
* **templates:** implement templates CRUD ([14c3321](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/14c332161fa124a64c70cec4195122314d470552))


### Bug Fixes

* implement auth guard to meta and categories ([85a0979](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/85a0979af55417ff69e32a6b714899992a65f5c2))
* **projects:** retrieve only user projects ([5e30382](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/5e3038299b23904b8392ec14edee7950ef2bf35c))
* **projects:** set isTemplate property as optional while create project ([175219f](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/175219f669ec2c5a3d09d38f77ea75cf38df78cd))

### [0.0.12](https://github.com/Ahmedtaheromar/Web-Me-backend/compare/v0.0.11...v0.0.12) (2022-10-21)


### Features

* **multi-environment:** setup multi environment strategy ([f7ad964](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/f7ad9640e84d79846ff9eb9174cce6c0f7027d8c))
* **register:** implement validations ([9b25aaa](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/9b25aaac133c38c61649635919b4771e4424a524))
* setup multi environment frontend API ([f666d3f](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/f666d3faed17dc8383db636291d99c6508561dfc))


### Bug Fixes

* **registeration:** validate if property is missing ([3fd4849](https://github.com/Ahmedtaheromar/Web-Me-backend/commit/3fd4849e8c4b2a546ef3be92d2922f9accb5f6c2))

### [0.0.11](https://github.com/kareemarafa/ionhour-web-me/compare/v0.0.10...v0.0.11) (2022-07-05)


### Features

* add project settings navigation button ([758a2d7](https://github.com/kareemarafa/ionhour-web-me/commit/758a2d775c98d003e8e04463486253545e068bd7))
* all sections style ([c59d5e5](https://github.com/kareemarafa/ionhour-web-me/commit/c59d5e5f13c463379742446b8ef2142069117863))
* let social icons be array ([6745a9f](https://github.com/kareemarafa/ionhour-web-me/commit/6745a9f855f9980fe7490651010fd86f4e3985e0))
* navigate CRA to pages ([9adde27](https://github.com/kareemarafa/ionhour-web-me/commit/9adde2737371c6c71af4bff0da0c6e75e70dac04))
* project logo should be selected by default ([fb34deb](https://github.com/kareemarafa/ionhour-web-me/commit/fb34debd7ec06f2ae3d839eb605eb763f3ec52c5))

### [0.0.10](https://github.com/kareemarafa/ionhour-web-me/compare/v0.0.9...v0.0.10) (2022-06-20)


### Features

* **builder-layout:** translation ([fc03a14](https://github.com/kareemarafa/ionhour-web-me/commit/fc03a143e1111c8b398d26e3ceefba69ccb30028))
* **builder-navbar:** translation ([3a6aa4d](https://github.com/kareemarafa/ionhour-web-me/commit/3a6aa4d3b46b8132143e214f13e4f1a33b07c53e))
* **docker:** add docker-compose file ([3d798a3](https://github.com/kareemarafa/ionhour-web-me/commit/3d798a3cedc71991236dc24cc53e89252e36610e))
* **media:** translation ([f50fa86](https://github.com/kareemarafa/ionhour-web-me/commit/f50fa86e6fc4c689dab7b6b18f1b155867c6a799))
* **profile:** translation ([2147e69](https://github.com/kareemarafa/ionhour-web-me/commit/2147e69ef1562fd8e8700e98ccf4c6423fa810f2))
* **projects:** translation ([865bada](https://github.com/kareemarafa/ionhour-web-me/commit/865badad551cb4b666165c2fe59531b85cd01498))
* **translation:** translation ([d9048b5](https://github.com/kareemarafa/ionhour-web-me/commit/d9048b520ac815e997b395a0b462ec5e6a68c631))


### Bug Fixes

* fix build issue ([1daa27e](https://github.com/kareemarafa/ionhour-web-me/commit/1daa27ecb91e9820d4bc4d2d8f22994b393a1b1f))
* refresh page withour getting 404 ([8dc70fd](https://github.com/kareemarafa/ionhour-web-me/commit/8dc70fd8127615c609018c127132530d3e6452b0))

### [0.0.9](https://github.com/kareemarafa/ionhour-web-me/compare/v0.0.8...v0.0.9) (2022-04-30)


### Features

* **blog:** add blog module with blog-a component ([da100f9](https://github.com/kareemarafa/ionhour-web-me/commit/da100f9ef1c4b35d96c6bccbca3f7777182dc89b))
* **newsletter:** add newsletter module ([0bd947d](https://github.com/kareemarafa/ionhour-web-me/commit/0bd947d9113b2eb796e2b315fdb1230cded4af2c))


### Bug Fixes

* **environment:** include translation properties to production environment ([ff65c56](https://github.com/kareemarafa/ionhour-web-me/commit/ff65c56ef4c8f77a6eb3273706482424ee647682))

### [0.0.8](https://github.com/kareemarafa/ionhour-web-me/compare/v0.0.7...v0.0.8) (2022-04-30)


### Features

* **language switch:** implement language switch in toolbar ([30936a6](https://github.com/kareemarafa/ionhour-web-me/commit/30936a6e35caf689010402511ec52c63e7a3cfcb))
* **side-menu:** translate menu items ([d2f6392](https://github.com/kareemarafa/ionhour-web-me/commit/d2f6392238622d2ac5ce894f1df543664e65cd1a))
* translate dashboard ([e6b8ae4](https://github.com/kareemarafa/ionhour-web-me/commit/e6b8ae422b47c7d3f1b8ab6789882f97ea94489b))
* **translation:** setup translation module ([49ccce9](https://github.com/kareemarafa/ionhour-web-me/commit/49ccce9e972a10778dbcb62d9605426071b5d37b))

### [0.0.7](https://github.com/kareemarafa/ionhour-web-me/compare/v0.0.6...v0.0.7) (2022-04-24)


### Features

* add icon library as iconPicker formly type ([95a7853](https://github.com/kareemarafa/ionhour-web-me/commit/95a7853ae05e9bda2e0f3134261e68a2a71c1568))
* **map:** support address and zoom inputs ([1e9cab9](https://github.com/kareemarafa/ionhour-web-me/commit/1e9cab9ca4103bed77d20c997dcafc0a85e9d3df))
* **navbar:** logo position ([2ce4570](https://github.com/kareemarafa/ionhour-web-me/commit/2ce4570dae91853170ae6c873efb5163b60d4ace))
* **services:** show image/icon ([e9b336f](https://github.com/kareemarafa/ionhour-web-me/commit/e9b336fdaa248cba94ed0a6feb49a841e50afbf4))
* show and hide slogan, title, menuItems ([7927eae](https://github.com/kareemarafa/ionhour-web-me/commit/7927eae9515fd0fb7f69a60e32de9fe6c1005eeb))
* **tippy.js:** wIP implement tippy.js for text formats ([3d15455](https://github.com/kareemarafa/ionhour-web-me/commit/3d154552cc4df1dee65317ee53348ad88b9e3985))
* wIP tippy.js implementation ([14e2067](https://github.com/kareemarafa/ionhour-web-me/commit/14e2067bd0b5111299d790e1766e4dfe9d5dcad9))


### Bug Fixes

* **navbar:** cTA implementation ([fa27367](https://github.com/kareemarafa/ionhour-web-me/commit/fa27367c143191ab0f3e2fe5477012f5786cc092))
* **services:** move component data and fields to service.module and fix service-b, service-c comps ([52312a1](https://github.com/kareemarafa/ionhour-web-me/commit/52312a1ab59e50f716eef6549c631da97a51bb30))

### [0.0.6](https://github.com/kareemarafa/ionhour-web-me/compare/v0.0.5...v0.0.6) (2022-04-23)

### [0.0.5](https://github.com/kareemarafa/ionhour-web-me/compare/v0.0.4...v0.0.5) (2022-04-23)


### Features

* add navbar sticky and normal option ([6f50957](https://github.com/kareemarafa/ionhour-web-me/commit/6f509570eadbab7bdfebf3ebacbed28083fd0c8d))
* add social media links to teams ([1e202c4](https://github.com/kareemarafa/ionhour-web-me/commit/1e202c4ac720aa598e43f253222ec5d4491601bd))
* add social media to footer ([7a45e0e](https://github.com/kareemarafa/ionhour-web-me/commit/7a45e0e2e3fdab1fcb149e4e7466b51dba734471))
* column size control ([2261b58](https://github.com/kareemarafa/ionhour-web-me/commit/2261b5871e32b0bf6f8f1b9e3a4ce980bda26b5b))
* remove exist components when element toggle switched off ([f7a6314](https://github.com/kareemarafa/ionhour-web-me/commit/f7a63140c0a4e937c2384f93d3b0a9d29bcfc606))

### [0.0.4](https://github.com/kareemarafa/ionhour-web-me/compare/v0.0.3...v0.0.4) (2022-04-21)


### Features

* **projects service:** update project validation ([306d632](https://github.com/kareemarafa/ionhour-web-me/commit/306d6328b2b2b9476ce01a043c6832bb7d2446dc))

### [0.0.3](https://github.com/kareemarafa/ionhour-web-me/compare/v0.0.2...v0.0.3) (2022-04-20)


### Features

* **project form:** add social inputs ([bc0f790](https://github.com/kareemarafa/ionhour-web-me/commit/bc0f79054ec53c70ef025736dfd78b626d5ccb6a))

### [0.0.2](https://github.com/kareemarafa/ionhour-web-me/compare/v0.0.1...v0.0.2) (2022-04-20)


### Features

* **projects entity:** add social media urls ([f86fc8b](https://github.com/kareemarafa/ionhour-web-me/commit/f86fc8b20fc867ea295f7a4c5fe679a67143be6c)), closes [#WM-195](https://github.com/kareemarafa/ionhour-web-me/issues/WM-195)

### 0.0.1 (2022-04-20)


### Features

* implement changelog generator ([968027a](https://github.com/kareemarafa/ionhour-web-me/commit/968027ac0ba5b4a6884a21654ecf705df8dac9b2))
