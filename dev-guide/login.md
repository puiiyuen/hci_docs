# Login
---
User input login information and submit them to server. Server will activate the session between server and user. User can use features after the identity authorization

## Configuration
### API Address
URL|https://hci.pchan.cn:8443/login
:-----|:--------------------------
Method|POST

### Request Paramters
Name|Type|Required|Default|Description
:-|:-|:-|:-|:-
userId|string|Yes|N/A|User's ID - `A-Number`
password|string|Yes|N/A|User's password
rememberMe|boolean|No|`false`|Remember login status or not

### Return Values
Name|Type|Description
:-|:-|:-
status|string|Login status
userId|string|User ID: if user logins successfully, it will return user ID. Otherwise ,return `null`.
message|string|Operation status prompt

#### Usage example with [axios](https://github.com/axios/axios)
``` js
const axios = require('axios')

let postData = {
    'userId':'A01234567',
    'password':'pass1234'
}

axios.post('https://hci.pchan.cn:8443/login',postData)
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

Please also read [Operation Status](status.html) page for more information about status.