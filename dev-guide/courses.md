# Courses

Here is to introduce how to access API of courses

<TOC/>

## Fetch General Course List
To get a full list of courses: 

### API Address
URL|https://hci.pchan.cn:8443/course/list
:-----|:--------------------------
Method|GET

### Return Values
Name|Type|Description
:-|:-|:-
status|string|The status of registering new user
message|string|An operation prompt
courses|json|course list

#### courses
``` json
"courses": [
    {
        "children": [
                {
                    "label": "ACST4633 Reading the Landscapes of Atlantic Canada",
                    "value": {
                        "courseId": "ACST4633",
                        "courseName": "Reading the Landscapes of Atlantic Canada",
                        "creditHour": 3,
                        "subjectId": "ACST"
                    }
                },
               .
               .
               .
        ],
        "label": "Atlantic Canada Studies",
        "value": "Atlantic Canada Studies"
    },
    .
    .
    .
]
```
