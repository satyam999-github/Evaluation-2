function Student(name, roll_no, className, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;

    // Function method to print top three subjects based on marks
    this.printTop3Subjects = function () {
        // Create an array of subjects and their corresponding marks
        const subjects = Object.keys(this.marks_of_5_subjects);
        const marks = Object.values(this.marks_of_5_subjects);

        // Sort the subjects based on marks in descending order
        const sortedSubjects = subjects.slice().sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);

        // Print the top three subjects
        console.log("Top 3 Subjects:");
        for (let i = 0; i < 3; i++) {
            console.log(`${i + 1}. ${sortedSubjects[i]} - ${this.marks_of_5_subjects[sortedSubjects[i]]}`);
        }
    };

    // Function method to print the report card
    this.printReportCard = function () {
        // Calculate the percentage
        const totalMarks = Object.values(this.marks_of_5_subjects).reduce((acc, mark) => acc + mark, 0);
        const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;

        // Print the report card
        console.log("+---------------------+");
        console.log("|     REPORT CARD     |");
        console.log("+---------------------+");
        console.log(`| Name     - ${this.name}   |`);
        console.log(`| Roll no. - ${this.roll_no}       |`);
        console.log(`| Class    - ${this.class}        |`);
        console.log(`| Section  - ${this.section}        |`);

        // Print individual subject marks
        for (const subject in this.marks_of_5_subjects) {
            console.log(`| ${subject.charAt(0).toUpperCase() +subject.slice(1)}   -     ${this.marks_of_5_subjects[subject]}   |`);
        }

        // Print the percentage
        console.log(`| Percentage - ${percentage.toFixed(1)} % |`);
        console.log("+---------------------+");
    };
}

// Example usage
const student1 = new Student("Satyam", 91, "X", "A", {
    scienc: 72,
    mathss: 75,
    social: 79,
    englis: 80,
    hindii  : 67
});

// Print top 3 subjects
student1.printTop3Subjects();

// Print the report card
student1.printReportCard();
