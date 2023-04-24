class Student{// declaration of class Student.
    constructor(name,studId){//constructor to instantiate the Student objects.
       this.name=name// student class variable to hold student name.
       this.studId=studId// student class variable to hold student Id.
    }
    introduce(){//A fuction to introduce the student.
        return `I am ${this.name} and my Student Id is :${this.studId}`;//returns the introduction.
    }
}
class Grade{//another class declaration
    constructor(name){//constructor to instantiate teh Grade objects.
        this.name=name//Grade class variable to hold grade name.
        this.students=[]//Grade class variable to hold students array.
    }
    describe(){// A function to describe the grade.
        return`${this.name} has ${this.students.length} students `;//returns description.
    }
    addStudent(student){
        //a function to add students taking a parameter student.
        if(student instanceof Student){
            //validating if the parameter is an object of Class Student.
            this.students.push(student)//if true,add the student to the students array.
        }else{
            throw new Error(`The argument should be an instance of Student.Argument is not an instance of Student`)//throw an error
        }
    }
}
class Menu{// Main class declaration(Menu)
    constructor(){//constructor to instantiate Menu objects.
        this.grades=[]//Menu class variable to hold the grades.
        this.selectedGrade= null//Menu class variable to hold the selected grade values.
    }
start(){// The main function start here.
    let selection=this.showMenuOptions();//calling the function to dispaly menu options .
    while(selection!=0){//loop to show th menu options and get the user input and do action based on the selections.
        switch(selection){
            case '1': this.addNewGrade();
            break;
            case '2': this.displayGrades();
            break;
            case '3': this.viewGrades();
            break;
            case '4': this.deleteGrade();
            break;
            default:
                selection=0;  
        }
        selection= this.showMenuOptions();//
    }
    alert(`You chose to Exit`);//Notify the user that he has entered '0' to exit.
}

showMenuOptions(){
    //Function to show the menu options.
    return prompt(`
           (0) Exit
           (1) Add a Grade
           (2) Display All Grades
           (3) View  All Grades
           (4) Delete a Grade`);//menu options.
}
showGradeMenuOptions(){
    //function to show the grsde menu options  passing a parameter gradeInfo.
    return prompt(`
           (0) Back
           (1) Add a New Student
           (2) Delete a Student 
           (3) View selected Grade info`);//Grade menu options to manage the selected grade
}
addNewGrade(){// a function to add a new grade.
    let name=prompt(`Enter the name of the grade:`);
    this.grades.push(new Grade(name));//this adds a new grade to the grades array.
}
displayGrades(){//A function to display the grades.
    let gradeString='';//An empty string to hold the grades
    for(let i=0;i<this.grades.length;i++){
        gradeString+='('+i+')'+this.grades[i].name +'\n';//concatenating the grade name with the empty string array.
    }
    alert(gradeString);
    }
viewGrades(){
    //A function to view grades.
    let index=prompt(`Enter the index of the grade that you would like to view:`)
    if (index > -1 && index < this.grades.length) {
        this.selectedGrade = this.grades[index];
    }
    let selection1=this.showGradeMenuOptions();//Show grade Menu options.
    switch(selection1){
        case '1':this.addNewStudent();
        break;
        case '2': this.deleteStudent();
        break;
        case '3': this.viewSelectedGradeInfo(this.selectedGrade);
        break;
    }
}
deleteGrade(){//function to delete a grade.
    let index=prompt(`Enter the index of the grade that you would like to delete:`);
    if(index>-1 && index<this.grades.length){//validationg the condition.
        this.grades.splice(index,1);//deleting one grade from the grades array according to the index entered.
    }
    
}
addNewStudent(){
    //A function to add a new student .
    let name=prompt(`Enter the name of the student:`);
    let studId=prompt(`Enter the studentId :`);
    this.selectedGrade.addStudent(new Student(name,studId));
}
deleteStudent(){//function to delete a Student from the array.
    let index=prompt(`Enter the index of thestudent you wish to delete:`);
    if(index>-1 && index<this.selectedGrade.students.length){//validating the condition.
        this.selectedGrade.students.splice(index,1);//delete a student according to th eindex entered.
    }
}
viewSelectedGradeInfo(grade)//A function to view selected grade info.
{
    let description = 'Grade Name: ' + grade.name + '\n';
        description += ' ' + grade.describe() + '\n ';
        for (let i = 0; i < grade.students.length; i++) {
            description +=i + ') ' + grade.students[i].introduce() + '\n';
        }
        alert(description);
}
}
let menu=new Menu();//creating an object for Class Menu.
menu.start();//invoking the start function .

