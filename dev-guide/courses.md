# Courses

Here is to introduce how to access API of courses

<TOC/>

## Fetch Course List
To get a full list of courses: 

#### API Address
URL|https://hci.peiyuan.ch/course/list
:-----|:--------------------------
Method|GET

#### Return Values
Name|Type|Description
:-|:-|:-
status|string|The status of fetch course list
message|string|An operation prompt
requiredCourses|json|Required courses list
electiveCourses|json|Elective courses list

##### Return Values json
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

##### requiredCourses
``` json
"requiredCourses": [
    {
        "label": "MATH1210 Introductory Calculus I",
        "value": "MATH1210"
    },
    ...
]
```

##### electiveCourses
``` json
"electiveCourses": [
    {
        "children": [
                {
                    "label": "ACST4633 Reading the Landscapes of Atlantic Canada",
                    "value": "ACST4633",
                },
               ...
        ],
        "label": "Atlantic Canada Studies",
        "value": "Atlantic Canada Studies"
    },
    ...
]
```

## Registration

### General Information
Show GPA, Total Credit Hour, The Amount of In-Progress Courses
#### API Address
URL|https://hci.peiyuan.ch/registration/info
:-|:-
Method|GET
#### Return Values
Name|Type|Description
:-|:-|:-
basicGradeInfo|json|General grade info
status|string|The status of fetch general grade info
message|string|An operation prompt
##### basicGradeInfo
``` json
    "basicGradeInfo": {
        "totalCreditHour": 12,
        "inProgress": 1,
        "gpa": 4.08
    }
```

### Show All Registered Courses
List all registered courses
#### API Address
URL|https://hci.peiyuan.ch/registration/list
:-|:-
Method|GET

#### Return Values
Name|Type|Description
:-|:-|:-
courses|json|Registered courses
status|string|The status of listing courses
message|string|An operation prompt

``` json
    "courses": [
        {
            "userId": "A00424241",
            "courseId": "CSCI2356",
            "courseName": "Mobile App Development",
            "courseStatus": "In-Progress",
            "creditHour": 3,
            "subject": "Computing Science",
            "letterGrade": "-",
            "gradePoint": -1.0
        },
        {
            "userId": "A00424241",
            "courseId": "CSCI4477",
            "courseName": "Data Mining",
            "courseStatus": "Passed",
            "creditHour": 3,
            "subject": "Computing Science",
            "letterGrade": "A+",
            "gradePoint": 4.3
        },
        {
            "userId": "A00424241",
            "courseId": "CSCI4500",
            "courseName": "Research Thesis",
            "courseStatus": "Passed",
            "creditHour": 6,
            "subject": "Computing Science",
            "letterGrade": "A",
            "gradePoint": 4.0
        },
        {
            "userId": "A00424241",
            "courseId": "ENGL1205",
            "courseName": "Introduction to Literature",
            "courseStatus": "In-Progress",
            "creditHour": 3,
            "subject": "English",
            "letterGrade": "-",
            "gradePoint": -1.0
        }
    ],
```

### Course Registration & Change Status
Add/Drop/Pass/Fail Courses
#### API Address
URL|https://hci.peiyuan.ch/registration
:-|:-
Method|POST

#### Request Paramters
Name|Type|Required|Default|Description
:-|:-|:-|:-|:-
courses|json|Yes|N/A|Courses to be registred/dropped/passed/failed

##### courses
Name|Type|Required|Default|Description
:-|:-|:-|:-|:-
courseId|string|Yes|N/A|Cousre ID
op|int|No|0|`0:add` `1:in-progress` `2:pass` `3:fail` `4:drop` 
letterGrade|string|No|N/A|Only use for `"op":2`

##### Example
``` json
{
    "courses": [
        {"courseId":"CSCI1226"},    //add 
        {"courseId":"MATH1211","op":0}, //add 
        {"courseId":"MATH2305","op":1}, //in-progress
        {"courseId":"CSCI4477","op":2,"letterGrade":"A+"},  //pass
        {"courseId":"ENGL1205","op":3},  //fail
        {"courseId":"CSCI3342","op":4}  //drop
        ...
    ]
}

```

#### Return Values
Name|Type|Description
:-|:-|:-
status|array/string|The status of course registration operation
message|string|Return the course registration status OR error message.


