export default class HolbertonCourse {
  // Constructor method to initialize the object
  constructor(name, length, students) {
    // Type checking during object creation
    if (typeof name !== 'string' || !Array.isArray(students || typeof length !== 'number') {
      throw new TypeError('Invalid attribute type');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for 'name'
  get name() {
    return this._name;
  }
  // Setter for 'name'
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Getter for 'length'
  get length() {
    return this._length;
  }
  // Setter for 'length'
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  // Getter for 'students'
  get students() {
    return this._students;
  }
  // Setter for 'students'
  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
