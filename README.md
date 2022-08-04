# Sequelize-Demo
A personal test bed for general vanilla sequelize bug verification. As simple as possible. 

## Issues discovered while seeding
Below are some descriptions of issues that I discovered while trying to seed. To verify that it wasn't my more complex application, I've created this test bed so that I can share my findings. 
* Please apply all the migrations. 
* Then apply the first seed ('my-seed-file'). 
The next seed files contain the issues discovered, attempt to apply them by name to see the issues.

### queryInstance.bulkInsert options (from Model.bulkCreate) are not working properly
Specifically, in the `issue-with-bulkInsert-options` seeder, the `updateOnDuplicate` option listed in the [Model.bulkCreate params list](https://sequelize.org/api/v6/class/src/model.js~model#static-method-bulkCreate) in which the documentation directs you when looking at [the for `queryInstance.bulkInsert` options parameters](https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-bulkInsert)

### queryInstance.upsert Cannot read properties of undefined (reading 'primaryKeys')
In the `issue-with-upsert` seeder, the upsert fails to update John Doe's bio (and other fields), with the error `ERROR: Cannot read properties of undefined (reading 'map')`  Referenced Documentation: https://sequelize.org/api/v6/class/src/dialects/abstract/query-interface.js~queryinterface#instance-method-upsert
