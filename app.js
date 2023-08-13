var courseAPI = 'http://localhost:3000/courses'

// function start(){
//     getCourses(function(courses){
//         renderCourses(courses)
//     })
// }

function start(){
    getCourses(renderCourses)
    handleCreateForm()
}

start()

//Function

function getCourses(callback){
    fetch(courseAPI)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}

function createCourses (data, callback){
    var options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify(data)
    };
    fetch(courseAPI, options)
        .then(function(response){
            response.json()
        })
        .then(callback)
}

function renderCourses (courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(course){
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="handleDeleteCourse(${course.id})">Xoá</button>
            </li>
            `
        }
    )
    listCoursesBlock.innerHTML = htmls.join('')
}

function handleDeleteCourse(id){
    var options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
    };    
    fetch(courseAPI + "/" + id, options)
        .then(function(response){
            response.json()
        })
        .then(function(){
            var courseItem = document.querySelector('.course-item-'+ `${course.id}`)
            if(courseItem){
                courseItem.remove()
            }
        })
}

function handleCreateForm (){
    var createBtn = document.querySelector('#create')
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value
        var description = document.querySelector('input[name="description"]').value

        var formData = {
            name: name,
            description: description
        }
        createCourses(formData, function() {
            getCourses(renderCourses)
        })
    }
}