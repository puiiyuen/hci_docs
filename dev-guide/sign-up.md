# Sign Up
---
User input personal information and submit them to server. Server will create a new account for user.
## Configuration
### API Address
URL|https://hci.peiyuan.ch/sign-up
:-----|:--------------------------
Method|POST
### Request Paramters
Name|Type|Required|Default|Description
:-|:-|:-|:-|:-
userId|string|Yes|N/A|User's ID - `A-Number`
password|string|Yes|N/A|User's password
nickname|string|Yes|N/A|User's nickname
major|string|No|`undeclared`|User's major
### Return Values
Name|Type|Description
:-|:-|:-
status|string|The status of registering new user
userId|string|User ID: if user registers successfully, it will return user ID. Otherwise ,return `null`.

Please also read [Operation Status](status.html) page for more information about status.