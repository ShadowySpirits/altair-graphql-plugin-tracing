export const mock2 = {
    "extensions":{
       "tracing":{
          "version":1,
          "startTime":"2018-07-23T22:14:30.465655Z",
          "execution":{
             "resolvers":[
                {
                   "startOffset":538924,
                   "returnType":"ProductInfo",
                   "path":[
                      "productInfo"
                   ],
                   "parentType":"RootQueryType",
                   "meta":null,
                   "fieldName":"productInfo",
                   "duration":29010460
                },
                {
                   "startOffset":29584290,
                   "returnType":"String!",
                   "path":[
                      "productInfo",
                      "name"
                   ],
                   "parentType":"ProductInfo",
                   "meta":null,
                   "fieldName":"name",
                   "duration":24403
                },
                {
                   "startOffset":29627042,
                   "returnType":"Int!",
                   "path":[
                      "productInfo",
                      "maxInsuredValue"
                   ],
                   "parentType":"ProductInfo",
                   "meta":null,
                   "fieldName":"maxInsuredValue",
                   "duration":7452
                }
             ]
          },
          "endTime":"2018-07-23T22:14:30.495361Z",
          "duration":29679541
       },
       "cacheControl":{
          "version":1,
          "hints":[
 
          ]
       }
    },
    "data":{
       "productInfo":{
          "name":"Cargo Cover",
          "maxInsuredValue":50000000
       }
    }
 };
 
export const mock = {
  "data": {
      "myProfile": {
          "id": "1QwyGIMTbD4cWgDLORJoQ46XLs0",
          "email": "jkfhjkh@kjhhkj.com",
          "name": "lkhjhjkhkj",
          "role": "transporter",
          "phoneNumber": "+6281111111112",
          "phoneNumberVerified": true,
          "accountType": "company",
          "avatar": null,
          "status": "suspended",
          "vehiclesCount": 0,
          "vehicles": [],
          "baseInformation": {
              "id": 2264,
              "address": "Jl Jalan",
              "ownerName": "Bambang",
              "city": "Bekasi",
              "postalCode": "11111"
          },
          "bankInformation": null,
          "documentInfo": [],
          "ratingInfo": {
              "average": 0,
              "count": 0
          },
          "representativeInformation": {
              "id": 269,
              "name": "Joko",
              "title": "Judul",
              "email": "apaaja@yopmail.com",
              "phoneNumber": "+6281211111111"
          }
      }
  },
  "extensions": {
      "tracing": {
          "version": 1,
          "startTime": "2019-10-01T04:16:11.199Z",
          "endTime": "2019-10-01T04:16:11.334Z",
          "duration": 134816991,
          "execution": {
              "resolvers": [
                  {
                      "path": [
                          "myProfile"
                      ],
                      "parentType": "Query",
                      "fieldName": "myProfile",
                      "returnType": "TransporterInterface",
                      "startOffset": 2362687,
                      "duration": 132087827
                  },
                  {
                      "path": [
                          "myProfile",
                          "id"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "id",
                      "returnType": "String!",
                      "startOffset": 134506313,
                      "duration": 23704
                  },
                  {
                      "path": [
                          "myProfile",
                          "email"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "email",
                      "returnType": "String!",
                      "startOffset": 134535421,
                      "duration": 7056
                  },
                  {
                      "path": [
                          "myProfile",
                          "name"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "name",
                      "returnType": "String!",
                      "startOffset": 134546832,
                      "duration": 5744
                  },
                  {
                      "path": [
                          "myProfile",
                          "role"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "role",
                      "returnType": "String!",
                      "startOffset": 134556406,
                      "duration": 5282
                  },
                  {
                      "path": [
                          "myProfile",
                          "phoneNumber"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "phoneNumber",
                      "returnType": "String!",
                      "startOffset": 134565692,
                      "duration": 5185
                  },
                  {
                      "path": [
                          "myProfile",
                          "phoneNumberVerified"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "phoneNumberVerified",
                      "returnType": "Boolean!",
                      "startOffset": 134574849,
                      "duration": 4662
                  },
                  {
                      "path": [
                          "myProfile",
                          "accountType"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "accountType",
                      "returnType": "String!",
                      "startOffset": 134583396,
                      "duration": 4489
                  },
                  {
                      "path": [
                          "myProfile",
                          "avatar"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "avatar",
                      "returnType": "ImageUrls",
                      "startOffset": 134591359,
                      "duration": 8265
                  },
                  {
                      "path": [
                          "myProfile",
                          "status"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "status",
                      "returnType": "TransporterSatus!",
                      "startOffset": 134602997,
                      "duration": 4594
                  },
                  {
                      "path": [
                          "myProfile",
                          "vehiclesCount"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "vehiclesCount",
                      "returnType": "Int!",
                      "startOffset": 134611430,
                      "duration": 4422
                  },
                  {
                      "path": [
                          "myProfile",
                          "vehicles"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "vehicles",
                      "returnType": "[VehicleInterface]!",
                      "startOffset": 134619407,
                      "duration": 7393
                  },
                  {
                      "path": [
                          "myProfile",
                          "baseInformation"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "baseInformation",
                      "returnType": "BaseInformation",
                      "startOffset": 134631794,
                      "duration": 5932
                  },
                  {
                      "path": [
                          "myProfile",
                          "baseInformation",
                          "id"
                      ],
                      "parentType": "BaseInformation",
                      "fieldName": "id",
                      "returnType": "Int!",
                      "startOffset": 134651954,
                      "duration": 6100
                  },
                  {
                      "path": [
                          "myProfile",
                          "baseInformation",
                          "address"
                      ],
                      "parentType": "BaseInformation",
                      "fieldName": "address",
                      "returnType": "String!",
                      "startOffset": 134663227,
                      "duration": 4906
                  },
                  {
                      "path": [
                          "myProfile",
                          "baseInformation",
                          "ownerName"
                      ],
                      "parentType": "BaseInformation",
                      "fieldName": "ownerName",
                      "returnType": "String!",
                      "startOffset": 134671716,
                      "duration": 4506
                  },
                  {
                      "path": [
                          "myProfile",
                          "baseInformation",
                          "city"
                      ],
                      "parentType": "BaseInformation",
                      "fieldName": "city",
                      "returnType": "String!",
                      "startOffset": 134679556,
                      "duration": 4506
                  },
                  {
                      "path": [
                          "myProfile",
                          "baseInformation",
                          "postalCode"
                      ],
                      "parentType": "BaseInformation",
                      "fieldName": "postalCode",
                      "returnType": "String!",
                      "startOffset": 134687650,
                      "duration": 4511
                  },
                  {
                      "path": [
                          "myProfile",
                          "bankInformation"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "bankInformation",
                      "returnType": "BankInformation",
                      "startOffset": 134696232,
                      "duration": 6849
                  },
                  {
                      "path": [
                          "myProfile",
                          "documentInfo"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "documentInfo",
                      "returnType": "[TransporterDocument]",
                      "startOffset": 134706245,
                      "duration": 5061
                  },
                  {
                      "path": [
                          "myProfile",
                          "ratingInfo"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "ratingInfo",
                      "returnType": "RatingInfo!",
                      "startOffset": 134716087,
                      "duration": 5466
                  },
                  {
                      "path": [
                          "myProfile",
                          "ratingInfo",
                          "average"
                      ],
                      "parentType": "RatingInfo",
                      "fieldName": "average",
                      "returnType": "Float!",
                      "startOffset": 134730090,
                      "duration": 5059
                  },
                  {
                      "path": [
                          "myProfile",
                          "ratingInfo",
                          "count"
                      ],
                      "parentType": "RatingInfo",
                      "fieldName": "count",
                      "returnType": "Int!",
                      "startOffset": 134738541,
                      "duration": 4366
                  },
                  {
                      "path": [
                          "myProfile",
                          "representativeInformation"
                      ],
                      "parentType": "CompanyTransporter",
                      "fieldName": "representativeInformation",
                      "returnType": "RepresentativeInformation",
                      "startOffset": 134746434,
                      "duration": 5311
                  },
                  {
                      "path": [
                          "myProfile",
                          "representativeInformation",
                          "id"
                      ],
                      "parentType": "RepresentativeInformation",
                      "fieldName": "id",
                      "returnType": "Int!",
                      "startOffset": 134764092,
                      "duration": 5478
                  },
                  {
                      "path": [
                          "myProfile",
                          "representativeInformation",
                          "name"
                      ],
                      "parentType": "RepresentativeInformation",
                      "fieldName": "name",
                      "returnType": "String!",
                      "startOffset": 134774202,
                      "duration": 4614
                  },
                  {
                      "path": [
                          "myProfile",
                          "representativeInformation",
                          "title"
                      ],
                      "parentType": "RepresentativeInformation",
                      "fieldName": "title",
                      "returnType": "String!",
                      "startOffset": 134782171,
                      "duration": 4365
                  },
                  {
                      "path": [
                          "myProfile",
                          "representativeInformation",
                          "email"
                      ],
                      "parentType": "RepresentativeInformation",
                      "fieldName": "email",
                      "returnType": "String!",
                      "startOffset": 134789734,
                      "duration": 4251
                  },
                  {
                      "path": [
                          "myProfile",
                          "representativeInformation",
                          "phoneNumber"
                      ],
                      "parentType": "RepresentativeInformation",
                      "fieldName": "phoneNumber",
                      "returnType": "String!",
                      "startOffset": 134797242,
                      "duration": 4359
                  }
              ]
          }
      }
  }
};
