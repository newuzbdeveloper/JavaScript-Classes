class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

   get fullName(){
       return `${this.firstName} ${this.lastName}`
   }

   set (fullName){
       this.firstName = firstName;
       this.lastName =  lastName;
   }

   get birthYear(){
       const currentYear = new Date().getFullYear();
       return currentYear - this.age;
   }

   set (birthYear){
       this.age = this.age;
   }
}

class Teacher extends User{
    constructor(firstName, lastName, age, groups, yearsOfExperience){
        super(firstName, lastName, age);
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.groups = groups;
        this.yearsOfExperience = yearsOfExperience;
    }

    isGroupTeacher(groupName){
        return this.groups.includes(groupName);
    }
}

class Student extends User{
    static MIN_GRADE_FOR_SCHOLARSHIP = 4;
    constructor(firstName, lastName, age, group, averageGrade){
        super(firstName, lastName, age);
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.group = group;
        this.averageGrade = averageGrade;
    }

    isEligibleForScholarship(averageGrade){
        return this.averageGrade >= Student.MIN_GRADE_FOR_SCHOLARSHIP;
    }
}