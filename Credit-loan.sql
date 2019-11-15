/*
 Navicat Premium Data Transfer

 Source Server         : localhost_27017
 Source Server Type    : MongoDB
 Source Server Version : 40006
 Source Host           : localhost:27017
 Source Schema         : Credit-loan

 Target Server Type    : MongoDB
 Target Server Version : 40006
 File Encoding         : 65001

 Date: 15/11/2019 14:46:38
*/


// ----------------------------
// Collection structure for Personal
// ----------------------------
db.getCollection("Personal").drop();
db.createCollection("Personal");

// ----------------------------
// Collection structure for admin
// ----------------------------
db.getCollection("admin").drop();
db.createCollection("admin");

// ----------------------------
// Collection structure for approved
// ----------------------------
db.getCollection("approved").drop();
db.createCollection("approved");

// ----------------------------
// Collection structure for audit
// ----------------------------
db.getCollection("audit").drop();
db.createCollection("audit");

// ----------------------------
// Collection structure for use
// ----------------------------
db.getCollection("use").drop();
db.createCollection("use");

// ----------------------------
// Documents of use
// ----------------------------
db.getCollection("use").insert([ {
    _id: ObjectId("5dcd1869ee7b000096006b52"),
    username: "wang",
    paspowrd: 123456
} ]);
