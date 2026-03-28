import Time "mo:core/Time";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";

actor {
  // Types
  type ContactSubmission = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  type Reservation = {
    id : Nat;
    name : Text;
    phone : Text;
    date : Text;
    time : Text;
    guests : Nat;
    notes : Text;
    timestamp : Int;
  };

  module ContactSubmission {
    public func compare(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  module Reservation {
    public func compare(a : Reservation, b : Reservation) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  // Storage
  var nextContactId = 0;
  var nextReservationId = 0;

  let contactSubmissions = Map.empty<Nat, ContactSubmission>();
  let reservations = Map.empty<Nat, Reservation>();

  // API
  public shared ({ caller }) func submitContact(name : Text, phone : Text, email : Text, message : Text) : async {
    id : Nat;
    timestamp : Int;
  } {
    let id = nextContactId;
    let timestamp = Time.now();

    let contact : ContactSubmission = {
      id;
      name;
      phone;
      email;
      message;
      timestamp;
    };

    contactSubmissions.add(id, contact);
    nextContactId += 1;
    { id; timestamp };
  };

  public shared ({ caller }) func makeReservation(name : Text, phone : Text, date : Text, time : Text, guests : Nat, notes : Text) : async {
    id : Nat;
    timestamp : Int;
  } {
    let id = nextReservationId;
    let timestamp = Time.now();

    let reservation : Reservation = {
      id;
      name;
      phone;
      date;
      time;
      guests;
      notes;
      timestamp;
    };

    reservations.add(id, reservation);
    nextReservationId += 1;
    { id; timestamp };
  };

  public query ({ caller }) func getContactSubmission(id : Nat) : async ContactSubmission {
    switch (contactSubmissions.get(id)) {
      case (null) { Runtime.trap("Contact submission not found") };
      case (?contact) { contact };
    };
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort();
  };

  public query ({ caller }) func getReservation(id : Nat) : async Reservation {
    switch (reservations.get(id)) {
      case (null) { Runtime.trap("Reservation not found") };
      case (?reservation) { reservation };
    };
  };

  public query ({ caller }) func getAllReservations() : async [Reservation] {
    reservations.values().toArray().sort();
  };
};
