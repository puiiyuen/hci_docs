# Courses

Here is to introduce how to access API of courses

<TOC/>

## Fetch Course List
To get a full list of courses: 

### API Address
URL|https://hci.pchan.cn:8443/course/list
:-----|:--------------------------
Method|GET

### Return Values
Name|Type|Description
:-|:-|:-
status|string|The status of fetch course list
message|string|An operation prompt
requiredCourses|json|Required courses list
electiveCourses|json|Elective courses list

#### Return Values json
``` json
    {
        "status": "SUCCESSFUL",
        "message": "OK",
        "requiredCourses": {
            // required courses list
        },
        "electiveCourses": {
            // elective courses list
        }
    }
```

#### requiredCourses
``` json
"requiredCourses": [
    {
        "label": "MATH1210 Introductory Calculus I",
        "value": "MATH1210"
    },
    .
    .
    .
]
```

#### electiveCourses
``` json
"electiveCourses": [
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

## Registration

### General Information

### Show All Registered Courses
List all registered courses
#### API Address
URL|https://hci.pchan.cn:8443/registration/list
:-|:-
Method|GET

#### Return Values
Name|Type|Description
:-|:-|:-
courses|json|Registered courses
status|string|The status of listing courses
message|string|An operation prompt

### Add Courses
Add new courses
#### API Address
URL|https://hci.pchan.cn:8443/registration/add
:-|:-
Method|POST

#### Request Paramters
Name|Type|Required|Default|Description
:-|:-|:-|:-|:-
courses|json|Yes|N/A|Courses to be registred

##### courses
``` json
{
    "courses": [
        "CSCI1226",
        "MATH1211",
        ...
    ]
}

```

#### Return Values
Name|Type|Description
:-|:-|:-
status|string|The status of registering courses
message|string|Return the amount of courses registred OR error message.

### Drop Courses

### Change Course Status

