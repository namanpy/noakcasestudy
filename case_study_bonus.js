// by Naman Sharma (namanpy@gmail.com), 25th August, 2023 
class Doctor {
  
  waitingTime = 0;
  totalWaitingTime = 0;
  constructor (waitingTime) {
    this.waitingTime = waitingTime;
  }
  
  getWaitingTime() {
    return this.waitingTime;
  }
  
  queuePatient() {
    this.totalWaitingTime = this.totalWaitingTime + this.waitingTime;
  }
  
  getTotalWaitingTime() {
    return this.totalWaitingTime;
  }
  
  
  
}

function calculateWaitTime(doctors, position) {
  //If there are more doctors than patients, wait time is 0.
  if(doctors.length >= position) {
    return 0;
  }
  
  patientsBefore = position - 1;
  
  //Initially all doctors have 0 total waiting time, as no doctors are busy
  for(let i = 0; i <= position; i++) {
    
    
    let doctor = doctors[0];
    //Finding doctor with lowest wait time and assigning patient to them
    for(let j = 0; j < doctors.length; j++) {
      if(doctors[j].getTotalWaitingTime() < doctor.getTotalWaitingTime()) {
        doctor = doctors[j];
      }
    }
    if(i === position) return doctor.getTotalWaitingTime();
    doctor.queuePatient();
  }
  
  
  
}


const doctors = [new Doctor(3), new Doctor(4)]

console.log(calculateWaitTime(doctors, 15), ' minutes');
