# Migration `20201129211617-migration`

This migration has been generated by Tyler Williams at 11/29/2020, 2:16:17 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Scenario" ADD COLUMN     "email" TEXT;
ALTER TABLE "Scenario" ADD COLUMN     "score" INTEGER
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201115022448-create-scenario..20201129211617-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = ["sqlite", "postgresql"]
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -10,10 +10,12 @@
 // Define your own datamodels here and run `yarn redwood db save` to create
 // migrations for them.
 model Scenario {
-  id    Int     @id @default(autoincrement())
+  id                 Int     @id @default(autoincrement())
   bettingInformation String
-  communityCards String
-  holeCards String
-  players  Int
+  communityCards     String
+  holeCards          String
+  players            Int
+  email              String?
+  score              Int?
 }
```


