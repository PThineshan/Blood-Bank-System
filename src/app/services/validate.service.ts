import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ValidateService {
  constructor() {}

  // validate form fields
  validateRegister(user) {
    // tslint:disable-next-line:max-line-length
    if (
      user.firstName === undefined ||
      user.lastName === undefined ||
      user.accountType === undefined ||
      user.email === undefined ||
      user.dob === undefined ||
      user.gender === undefined ||
      user.phoneNo === undefined ||
      user.address === undefined ||
      user.city === undefined ||
      user.username === undefined ||
      user.password === undefined ||
      user.bloodGroup === undefined
    ) {
      return false;
    } else {
      return true;
    }
  }

  validateAmpulance(details) {
    if (
      details.ampulanceId === undefined ||
      details.regNo === undefined ||
      details.driverName === undefined ||
      details.address === undefined ||
      details.phoneNo === undefined ||
      details.description === undefined
    ) {
      return false;
    }
    return true;
  }

  validateAmpulanceRequest(request) {
    if (
      request.ampulance === undefined ||
      request.patient === undefined ||
      request.address === undefined ||
      request.charge === undefined ||
      request.date === undefined ||
      request.rtime === undefined ||
      request.dtime === undefined
    ) {
      return false;
    }
    return true;
  }

  validateAmpulanceTime(start, end) {
    start = start.split(":");
    end = end.split(":");
    var startDate = new Date(0, 0, 0, start[0], start[1], 0);
    var endDate = new Date(0, 0, 0, end[0], end[1], 0);
    var diff = endDate.getTime() - startDate.getTime();
    var hours = Math.floor(diff / 1000 / 60 / 60);
    if (hours > 0) {
      return true;
    }
    return false;
  }

  validateCharge(charge) {
    if (charge > 0) {
      return true;
    }
    return false;
  }
  validateBloodRequest(request) {
    if (
      request.patientName === undefined ||
      request.bloodGroup === undefined ||
      request.city === undefined ||
      request.reqDate === undefined ||
      request.email === undefined ||
      request.phoneNo === undefined ||
      request.hospitalName === undefined ||
      request.address === undefined ||
      request.purpose === undefined
    ) {
      return false;
    }
    return true;
  }

  validateBloodBank(details) {
    if (
      details.bankName === undefined ||
      details.hospitalName === undefined ||
      details.district === undefined ||
      details.address === undefined ||
      details.email === undefined ||
      details.phoneNo === undefined ||
      details.fax === undefined
    ) {
      return false;
    }
    return true;
  }

  validateBloodCamp(details) {
    if (
      details.district === undefined ||
      details.address === undefined ||
      details.date === undefined ||
      details.time === undefined
    ) {
      return false;
    }
    return true;
  }

  validateContact(contact) {
    if (
      contact.name === undefined ||
      contact.email === undefined ||
      contact.subject === undefined ||
      contact.message === undefined
    ) {
      return false;
    }
    return true;
  }

  // validate email
  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // validate signin
  validateSignIn(user) {
    if (user.username === undefined || user.password === undefined) {
      return true;
    }
    return false;
  }

  //validate donor edge is greater than 17
  validateAge(accountType, dob) {
    var dt2 = new Date();
    var dt1 = new Date(dob);
    var diff = Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
        (1000 * 60 * 60 * 24)
    );
    if (accountType == "Donor") {
      if (diff > 6210) {
        return true;
      }
      return false;
    }
    return true;
  }

  //validate blood request date
  validateBloodRequestDate(date) {
    const temp1 = new Date(date);
    const today = new Date(); // today date
    if (today < temp1) {
      return true;
    }
    return false;
  }

  validateBloodCampDate(date) {
    const temp1 = new Date(date);
    const today = new Date(); // today date
    if (today < temp1) {
      return true;
    }
    return false;
  }

  validateApproveRequest(status) {
    if (!status) {
      return false;
    }
    return true;
  }

  validateSelectDistrict(district) {
    if (!district) {
      return false;
    }
    return true;
  }

  validatePhoneNo(number) {
    const re = /^[\+]?[(]?[0-9]{2}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/;
    return re.test(String(number));
  }

  validateAmount(amount) {
    const am = /^\d+(?:\.\d{0,2})$/;
    return am.test(String(amount));
  }
}
