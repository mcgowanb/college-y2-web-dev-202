export class Detail{

    name: string;
    address: string;
    studentID: string;
    phoneNumber: string;
    notes: string;

    constructor(name, address, studentID, phoneNumber, notes){
        this.name = name;
        this.address = address;
        this.studentID = studentID;
        this.phoneNumber = phoneNumber;
        this.notes = notes;
    }
}