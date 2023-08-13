// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport (arr) {
//     return arr.filter((sport, index) => sport.like > 5)
// }


// // Kỳ vọng
// console.log(getMostFavoriteSport(sports)) 
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]


// Viet lai ham ForEach
// Duyet qua tung phan tu cua mang

// 1. Object Prototype
// 2. For in (duyet qua toan bo array, ke ca trong prototype)
// 3. hasOwnProperty

// var courses = [
//     'JS',
//     'PHP',
//     'Ruby'
// ]

// Array.prototype.forEach2 = function (callback){
//     for (var index in this) {
//         //Kiem tra xem index co nam trong prototype hay khong
//         if (this.hasOwnProperty(index)) {
//             callback(this[index], index, this)
//         }
//     }
    
// }

// courses.forEach2(function (course, index, array){
//     console.log(course, index, array)
// });


//Filter2

// Array.prototype.filter2 = function(callback) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = callback(this[index], index, this)
//             if (result) {
//                 output.push(this[index])
//             }
//         }
//     }
//     return output
// }

// var courses = [
//     {
//         name: 'JS',
//         coin: 500
//     },
//     {
//         name: 'PHP',
//         coin: 600
//     },
//     {
//         name: 'Ruby',
//         coin: 700
//     }
// ]


// var filterCourse = courses.filter2(function (course, index, array){
//     return course.coin >=600;
// })

// console.log(filterCourse)


//Some

// Array.prototype.some2 = function (callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             if (callback(this[index], index, this)) {
//                 return true
//             }            
//         }
//     }
//     return false
// }

// var courses = [
//     {
//         name: 'JS',
//         coin: 500,
//         isFinish: false
//     },
//     {
//         name: 'PHP',
//         coin: 600,
//         isFinish: false
//     },
//     {
//         name: 'Ruby',
//         coin: 700,
//         isFinish: false
//     }
// ]

// var result = courses.some2(function (course, index, array) {
//     return course.isFinish;
// })

// console.log(result)

var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

// function render(courses) {
//     var elementNode = document.querySelector('.courses-list')
//     var output = courses.map(function(course) {
//         output = `<li>${course}</li>`
//         return output
//     })
//     elementNode.innerHTML = `${output}`
// }
// render(courses)


// function render(courses) {
//     var elementNode = document.querySelector('.courses-list')
//     var arr = []
//     for (var index in courses) {
//         arr.push(`<li>${courses[index]}</li>`)
//     }

//     return elementNode.innerHTML = arr.join('')
// }

// function render(courses) {
//     var elementNode = document.querySelector('.courses-list')
//     var arr = []
//     courses.forEach(function(course){
//        return arr.push(`<li>${course}</li>`)
//     })

//     return elementNode.innerHTML = arr.join('')
// }

// function render (courses) {
//     var elementNode = document.querySelector('.courses-list')
//     var output = courses.reduce(function(total, value){
//         console.log(total, value)
//     return total.concat(`<li>${value}</li>`)
//     }, []).join('')
//     return elementNode.innerHTML = output
// }

