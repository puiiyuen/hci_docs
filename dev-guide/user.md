# User

Here is to introduce how to use API of user basic features

<!-- [[toc]] -->
<TOC />

## Sign Up
User input personal information and submit them to server. Server will create a new account for user.

### General

#### API Address
URL|https://hci.peiyuan.ch/sign-up
:-----|:--------------------------
Method|POST
#### Request Paramters
Name|Type|Required|Default|Description
:-|:-|:-|:-|:-
userId|string|Yes|N/A|User's ID - `A-Number`
password|string|Yes|N/A|User's password
nickname|string|Yes|N/A|User's nickname
major|string|No|`undeclared`|User's [major](user.html#degree-major-list)
degree|string|Yes|N/A|User's [degree](user.html#degree-major-list)

Please also read [Degree & Major List](user.html#degree-major-list)

#### Return Values
Name|Type|Description
:-|:-|:-
status|string|The status of registering new user
userId|string|User ID: if user registers successfully, it will return user ID. Otherwise ,return `null`.

##### Usage example with [axios](https://github.com/axios/axios)
``` js
const axios = require('axios')

let postData = {
    'userId':'A01234567',
    'password':'pass1234',
    'nickname':'Patrick',
    'major':'Computer Science',
    'degree':'Bachelor of Science'
}

axios.post('https://hci.peiyuan.ch/sign-up',postData)
.then(function (response){
    console.log('status: '+response.data.status)
    console.log('userId: '+response.data.userId)
    console.log('message: '+response.data.message)
})

```
Console:   
`status: SUCCESSFUL`   
`userId: A01234567`   
`message: OK`

### Degree & Major List

#### API Address
URL|https://hci.peiyuan.ch/sign-up-major
:-----|:--------------------------
Method|GET

#### Return Values
Name|Type|Description
:-|:-|:-
status|string|The status of fetch degree major list
message|string|An operation prompt
degreeMajor|json|A list of major classfied by degree

##### degreeMajor
``` json
degreeMajor: [
    {
        "value": "B01",
        "label": "Bachelor of Arts",
        "children": [
            {
                "value": "BA01",
                "label": "Anthropology"
            },
            .
            .
            .
        ]
    },
    .
    .
    .
]
```

## Login
User input login information and submit them to server. Server will activate the session between server and user. User can use features after the identity authorization

#### API Address
URL|https://hci.peiyuan.ch/login
:-----|:--------------------------
Method|POST

#### Request Paramters
Name|Type|Required|Default|Description
:-|:-|:-|:-|:-
userId|string|Yes|N/A|User's ID - `A-Number`
password|string|Yes|N/A|User's password
rememberMe|boolean|No|`false`|Remember login status or not

#### Return Values
Name|Type|Description
:-|:-|:-
status|string|Login status
userId|string|User ID: if user logins successfully, it will return user ID. Otherwise ,return `null`.
message|string|Operation status prompt

## Online Check
Check the user if he is online
#### API Address
URL|https://hci.peiyuan.ch/online
:-|:-
Method|GET

#### Return Values
Name|Type|Description
:-|:-|:-
status|string|The operation status of online check feature.
userId|string|User ID: if user is online, it will return user ID. Otherwise , return `null`.
message|string|An operation message prompt

##### Usage example with [axios](https://github.com/axios/axios)
``` js
const axios = require('axios')

axios.get('https://hci.peiyuan.ch/online')
.then(function (response){
    console.log('status: '+response.data.status)
    console.log('userId: '+response.data.userId)
    console.log('message: '+response.data.message)
})

```
Console:   
`status: SUCCESSFUL`   
`userId: A01234567`   
`message: A01234567 is online`

## Logout
Inactivate the session between user and server.
#### API Address
URL|https://hci.peiyuan.ch/logout
:-|:-
Method|GET
#### Return Values
Name|Type|Description
:-|:-|:-
status|string|The status of log out.
userId|string|User ID: if user logs out successfully, it will return user ID. Otherwise , return `null`.
message|string|An operation message prompt

## User Information
Get user information when user is online
#### API Address
URL|https://hci.peiyuan.ch/user
:-|:-
Method|GET
#### Return Values
Name|Type|Description
:-|:-|:-
status|string|The status of fetching informaiton
user|json|User's information set
message|string|An operation message prompt

##### user json
Name|Type|Description
:-|:-|:-
userId|string|User ID
nickname|string|User's nickname
degree|string|User's degree
major|string|User's Major
degreeId|string|Degree's Id
majorId|string|Major's Id

## Settings
Modify Personal Information
#### API Adress
URL|https://hci.peiyuan.ch/settings
:-|:-
Method|POST

#### Request Parameters
Name|Type|Required|Default|Description
:-|:-|:-|:-|:-
nickname|string|No|N/A|Change nickname
oldPassword|string|No (When change password, *required*)|N/A|Change password - old password
newPassword|string|No (When change password, *required*)|N/A|Change password - new password
major|string|No|N/A|Change [major](user.html#degree-major-list)
degree|string|No|N/A|Change [degree](user.html#degree-major-list)

Please also read [Degree & Major List](user.html#degree-major-list)

#### Return Values
Name|Type|Description
:-|:-|:-
status|array/string|The status of change informaiton
message|string|An operation message prompt

---
Please also read [Operation Status](status.html) page for more information about status.
